import { test, expect } from '@playwright/test';

test.describe('SEO & Meta Tests', () => {
  test('should have proper meta tags', async ({ page }) => {
    await page.goto('/');
    
    // Check title
    await expect(page).toHaveTitle(/.*AI.*|.*BLANXLAIT.*/i);
    
    // Check meta description (if exists)
    const metaDescription = page.locator('meta[name="description"]');
    if (await metaDescription.count() > 0) {
      const content = await metaDescription.getAttribute('content');
      expect(content).toBeTruthy();
      expect(content!.length).toBeGreaterThan(50);
      expect(content!.length).toBeLessThan(160);
    }
    
    // Check viewport meta tag
    const viewportMeta = page.locator('meta[name="viewport"]');
    await expect(viewportMeta).toHaveAttribute('content', /width=device-width/);
  });

  test('should have proper heading structure for SEO', async ({ page }) => {
    await page.goto('/');
    
    // Should have exactly one H1
    const h1Elements = page.locator('h1');
    await expect(h1Elements).toHaveCount(1);
    
    // H1 should contain relevant keywords
    const h1Text = await h1Elements.textContent();
    expect(h1Text?.toLowerCase()).toMatch(/ai|artificial intelligence|software|solutions/);
    
    // Should have H2s for main sections
    const h2Elements = page.locator('h2');
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThanOrEqual(2);
  });

  test('should have semantic HTML structure', async ({ page }) => {
    await page.goto('/');
    
    // Check for semantic elements
    await expect(page.locator('header')).toBeVisible();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('footer')).toBeVisible();
    await expect(page.locator('nav')).toBeVisible();
    
    // Check for sections
    const sections = page.locator('section');
    const sectionCount = await sections.count();
    expect(sectionCount).toBeGreaterThanOrEqual(3); // Hero, Services, About, Contact
  });

  test('should have proper link structure', async ({ page }) => {
    await page.goto('/');
    
    // Check internal links
    const internalLinks = page.locator('a[href^="#"], a[href^="/"], a[href^="./"]');
    const internalLinkCount = await internalLinks.count();
    expect(internalLinkCount).toBeGreaterThan(0);
    
    // Check external links have proper attributes
    const externalLinks = page.locator('a[href^="http"]:not([href*="blanxlait.com"])');
    const externalLinkCount = await externalLinks.count();
    
    for (let i = 0; i < externalLinkCount; i++) {
      const link = externalLinks.nth(i);
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', /noopener|noreferrer/);
    }
  });

  test('should have proper Open Graph tags (if implemented)', async ({ page }) => {
    await page.goto('/');
    
    // Check for Open Graph tags (these should be added for better social sharing)
    const ogTitle = page.locator('meta[property="og:title"]');
    const ogDescription = page.locator('meta[property="og:description"]');
    const ogType = page.locator('meta[property="og:type"]');
    
    // These are recommendations for future implementation
    const hasOGTags = await ogTitle.count() > 0;
    
    if (hasOGTags) {
      await expect(ogTitle).toHaveAttribute('content');
      await expect(ogType).toHaveAttribute('content', 'website');
    }
  });

  test('should have fast loading for SEO', async ({ page }) => {
    const startTime = Date.now();
    await page.goto('/');
    
    // Wait for main content to be visible
    await page.waitForSelector('h1');
    
    const loadTime = Date.now() - startTime;
    
    // Should load quickly for good SEO
    expect(loadTime).toBeLessThan(2000);
  });

  test('should have proper content structure', async ({ page }) => {
    await page.goto('/');
    
    // Check that content is well-structured with appropriate elements
    
    // Should have lists for features
    const lists = page.locator('ul, ol');
    const listCount = await lists.count();
    expect(listCount).toBeGreaterThan(0);
    
    // Should have paragraphs with substantial content
    const paragraphs = page.locator('p');
    const paragraphCount = await paragraphs.count();
    expect(paragraphCount).toBeGreaterThan(3);
    
    // Check for keywords in content
    const bodyText = await page.locator('body').textContent();
    const keywords = ['AI', 'artificial intelligence', 'business', 'software', 'solutions', 'BLANXLAIT'];
    
    keywords.forEach(keyword => {
      expect(bodyText?.toLowerCase()).toContain(keyword.toLowerCase());
    });
  });
});
