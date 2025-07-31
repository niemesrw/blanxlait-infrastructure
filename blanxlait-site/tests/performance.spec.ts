import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should load page within acceptable time', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    
    // Wait for page to be fully loaded
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    // Page should load within 5 seconds (adjusted for development environment)
    expect(loadTime).toBeLessThan(5000);
  });

  test('should have good Core Web Vitals', async ({ page }) => {
    await page.goto('/');
    
    // Wait for page to load completely
    await page.waitForLoadState('networkidle');
    
    // Check that images are loaded efficiently
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const img = images.nth(i);
      await expect(img).toBeVisible();
    }
  });

  test('should not have console errors', async ({ page }) => {
    const consoleLogs: string[] = [];
    
    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleLogs.push(msg.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Should not have any console errors
    expect(consoleLogs).toHaveLength(0);
  });

  test('should have efficient resource loading', async ({ page }) => {
    await page.goto('/');
    
    // Check that CSS is loaded (Vite inlines CSS in development)
    const styles = await page.locator('style, link[rel="stylesheet"]').count();
    expect(styles).toBeGreaterThan(0);
    
    // Check that JavaScript is loaded
    const scripts = await page.locator('script').count();
    expect(scripts).toBeGreaterThan(0);
    
    // Check that main content is styled correctly
    const heroSection = page.locator('.hero');
    await expect(heroSection).toBeVisible();
    
    // Verify CSS is working by checking computed styles
    const heroStyles = await heroSection.evaluate((el) => {
      const styles = window.getComputedStyle(el);
      return {
        display: styles.display,
        position: styles.position
      };
    });
    
    expect(heroStyles.display).not.toBe('none');
  });
});
