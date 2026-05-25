import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  // Nav items
  readonly navAbout: Locator;
  readonly navServices: Locator;
  readonly navSectors: Locator;
  readonly navMedia: Locator;
  readonly navCaseStudies: Locator;
  readonly navContact: Locator;

  // Nav item parent (for hover)
  readonly navAboutItem: Locator;

  // Dropdown links
  readonly dropdownCareers: Locator;

  constructor(page: Page) {
    this.page = page;

    const nav = page.getByRole('navigation', { name: 'Menu' }).first();

    this.navAbout      = nav.getByRole('link', { name: 'About', exact: true });
    this.navServices   = nav.getByRole('link', { name: 'Services', exact: true });
    this.navSectors    = nav.getByRole('link', { name: 'Sectors', exact: true });
    this.navMedia      = nav.getByRole('link', { name: 'Media', exact: true });
    this.navCaseStudies = nav.getByRole('link', { name: 'Case Studies', exact: true });
    // Outside nav - standalone btn
    this.navContact    = page.locator('a[href*="/contact/"]:visible').first();

    this.navAboutItem    = nav.locator('li:has(> a[href*="/about/"])');
    this.dropdownCareers = page.locator('a[href*="/careers/"]').first();
  }

  async goto() {
    await this.page.goto('https://www.unifybusiness.co.uk/');
  }
}