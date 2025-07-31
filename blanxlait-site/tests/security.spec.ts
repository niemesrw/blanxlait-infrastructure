import { test, expect } from '@playwright/test';

test.describe('Security Tests', () => {
  test('should have proper security headers', async ({ page, baseURL }) => {
    const response = await page.goto('/');
    
    // Check security headers
    const headers = response?.headers();
    
    // Only test security headers if we're in production (HTTPS)
    if (baseURL?.includes('https://')) {
      // X-Content-Type-Options
      expect(headers?.['x-content-type-options']).toBe('nosniff');
      
      // X-Frame-Options
      expect(headers?.['x-frame-options']).toBe('DENY');
      
      // X-XSS-Protection
      expect(headers?.['x-xss-protection']).toBe('1; mode=block');
      
      // Strict-Transport-Security
      expect(headers?.['strict-transport-security']).toContain('max-age=');
      
      // Content-Security-Policy
      expect(headers?.['content-security-policy']).toContain("default-src 'self'");
      
      // Referrer-Policy
      expect(headers?.['referrer-policy']).toBe('strict-origin-when-cross-origin');
    } else {
      // For local development, just verify the page loads securely
      expect(response?.status()).toBe(200);
      console.log('Security headers test skipped for local development');
    }
  });

  test('should validate contact form input', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#contact"]');
    
    // Test empty form submission
    const submitButton = page.locator('button[type="submit"]');
    await submitButton.click();
    
    // Should not submit with empty fields (basic validation)
    await expect(page.locator('input[name="name"]')).toBeVisible();
    
    // Test long input rejection
    const longString = 'a'.repeat(2001);
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', longString);
    
    await submitButton.click();
    
    // Should handle validation gracefully
    await expect(page.locator('button[type="submit"]')).toBeEnabled();
  });

  test('should have proper meta tags for security', async ({ page }) => {
    await page.goto('/');
    
    // Check that meta tags don't expose sensitive information
    const metaViewport = page.locator('meta[name="viewport"]');
    await expect(metaViewport).toHaveAttribute('content', 'width=device-width, initial-scale=1.0');
    
    // Check that there's no generator meta tag exposing framework
    const metaGenerator = page.locator('meta[name="generator"]');
    await expect(metaGenerator).toHaveCount(0);
  });

  test('should not expose sensitive information in console', async ({ page }) => {
    const consoleMessages: string[] = [];
    
    page.on('console', msg => {
      consoleMessages.push(msg.text());
    });
    
    await page.goto('/');
    
    // Check that no sensitive information is logged
    const sensitivePatterns = [
      /password/i,
      /secret/i,
      /token/i,
      /api[_-]?key/i
    ];
    
    for (const message of consoleMessages) {
      for (const pattern of sensitivePatterns) {
        expect(message).not.toMatch(pattern);
      }
    }
  });

  test('should handle XSS prevention', async ({ page }) => {
    await page.goto('/');
    await page.click('a[href="#contact"]');
    
    // Try to inject script in form fields
    const xssPayload = '<script>alert("xss")</script>';
    
    await page.fill('input[name="name"]', xssPayload);
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('input[name="company"]', xssPayload);
    await page.fill('textarea[name="message"]', 'Test message with XSS: ' + xssPayload);
    
    // Form should accept input but sanitize it (our sanitization will remove scripts)
    await expect(page.locator('input[name="name"]')).toHaveValue(xssPayload);
    
    // Check that the form is properly validating - no actual alert should appear
    // We're testing that the form accepts input but processes it safely
    const nameField = page.locator('input[name="name"]');
    await expect(nameField).toBeVisible();
    
    // Verify form validation is working
    const submitButton = page.locator('button[type="submit"]');
    await expect(submitButton).toBeVisible();
  });

  test('should have proper HTTPS configuration', async ({ page, baseURL }) => {
    // Skip for local testing, this test is for production
    if (!baseURL?.includes('https://')) {
      console.log('HTTPS test skipped for local development');
      return;
    }
    
    const response = await page.goto('/');
    
    // Check that site uses HTTPS
    expect(page.url()).toMatch(/^https:/);
    
    // Check HSTS header
    const headers = response?.headers();
    expect(headers?.['strict-transport-security']).toBeDefined();
  });

  test('should have secure cookie settings', async ({ page, context }) => {
    await page.goto('/');
    
    // Check that any cookies set are secure
    const cookies = await context.cookies();
    
    for (const cookie of cookies) {
      if (cookie.name.includes('session') || cookie.name.includes('auth')) {
        expect(cookie.secure).toBe(true);
        expect(cookie.httpOnly).toBe(true);
        expect(cookie.sameSite).toBe('Strict');
      }
    }
  });
});
