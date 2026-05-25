import { test, expect } from '../../fixtures';
// adding comment to test pipeline runs successfully
test.describe('Navigation', () => {

  test.describe('visibility', () => {
    test('all nav links are visible', async ({ homePage }) => {
      await expect(homePage.navAbout).toBeVisible();
      await expect(homePage.navServices).toBeVisible();
      await expect(homePage.navSectors).toBeVisible();
      await expect(homePage.navMedia).toBeVisible();
      await expect(homePage.navCaseStudies).toBeVisible();
      await expect(homePage.navContact).toBeVisible();
    });

    test('About dropdown contains a Careers link', async ({ homePage }) => {
      await expect(homePage.dropdownCareers).toBeAttached();
    });
  });

  test.describe('navigation', () => {
    test('nav links point to the correct pages', async ({ homePage }) => {
      await expect(homePage.navAbout).toHaveAttribute('href', /\/about/);
      await expect(homePage.navServices).toHaveAttribute('href', /\/services/);
      await expect(homePage.navSectors).toHaveAttribute('href', /\/sectors/);
      await expect(homePage.navMedia).toHaveAttribute('href', /\/media/);
      await expect(homePage.navCaseStudies).toHaveAttribute('href', /\/case-studies/);
      await expect(homePage.navContact).toHaveAttribute('href', /\/contact/);
    });

    test('clicking Contact us navigates to the Contact page', async ({ homePage, page }) => {
      await homePage.navContact.click();
      await expect(page).toHaveURL(/\/contact/);
    });
  });
});