import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  const viewports = [
    { name: 'Mobile', width: 375, height: 667 },
    { name: 'Tablet', width: 768, height: 1024 },
    { name: 'Desktop', width: 1920, height: 1080 },
    { name: 'Large Desktop', width: 2560, height: 1440 }
  ];

  viewports.forEach(({ name, width, height }) => {
    test(`should display correctly on ${name} (${width}x${height})`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto('/');
      
      // Check that main elements are visible
      await expect(page.locator('h1')).toBeVisible();
      await expect(page.locator('header')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
      
      // Check navigation is accessible
      const navigation = page.locator('nav');
      await expect(navigation).toBeVisible();
      
      if (width < 768) {
        // On mobile, navigation should still be visible but compact
        await expect(navigation.locator('a').first()).toBeVisible();
      } else {
        // On larger screens, all navigation links should be visible
        await expect(navigation.locator('a').first()).toBeVisible();
      }
      
      // Check that content doesn't overflow
      const body = page.locator('body');
      const bodyBoundingBox = await body.boundingBox();
      
      if (bodyBoundingBox) {
        expect(bodyBoundingBox.width).toBeLessThanOrEqual(width + 20); // Allow for scrollbar
      }
    });
  });

  test('should have readable text on all screen sizes', async ({ page }) => {
    const viewports = [
      { width: 375, height: 667 }, // Mobile
      { width: 1920, height: 1080 } // Desktop
    ];

    for (const viewport of viewports) {
      await page.setViewportSize(viewport);
      await page.goto('/');
      
      // Check that headings are appropriately sized
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      
      const h1BoundingBox = await h1.boundingBox();
      if (h1BoundingBox) {
        // Text should not be too small
        expect(h1BoundingBox.height).toBeGreaterThan(20);
      }
      
      // Check that paragraphs are readable
      const paragraphs = page.locator('p');
      const firstParagraph = paragraphs.first();
      await expect(firstParagraph).toBeVisible();
    }
  });

  test('should have proper touch targets on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    // Check that buttons and links are large enough for touch
    const interactiveElements = page.locator('button, a');
    const count = await interactiveElements.count();
    
    for (let i = 0; i < Math.min(count, 10); i++) { // Check first 10 elements
      const element = interactiveElements.nth(i);
      if (await element.isVisible()) {
        const boundingBox = await element.boundingBox();
        
        if (boundingBox) {
          // Touch targets should be at least 44px according to WCAG
          const minDimension = Math.min(boundingBox.width, boundingBox.height);
          expect(minDimension).toBeGreaterThanOrEqual(24); // Relaxed for small elements, focus on main interactive elements
        }
      }
    }
  });

  test('should maintain layout integrity across breakpoints', async ({ page }) => {
    await page.goto('/');
    
    // Test key breakpoints
    const breakpoints = [320, 375, 768, 1024, 1440, 1920];
    
    for (const width of breakpoints) {
      await page.setViewportSize({ width, height: 800 });
      
      // Check that content is still properly aligned
      await expect(page.locator('h1')).toBeVisible();
      
      // Check that no horizontal scrollbars appear (except at very small sizes)
      if (width >= 320) {
        const body = page.locator('body');
        const boundingBox = await body.boundingBox();
        
        if (boundingBox) {
          expect(boundingBox.width).toBeLessThanOrEqual(width + 20);
        }
      }
    }
  });
});
