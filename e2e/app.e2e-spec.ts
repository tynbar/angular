import { Projekt1Page } from './app.po';

describe('projekt1 App', () => {
  let page: Projekt1Page;

  beforeEach(() => {
    page = new Projekt1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
