import { Ng2newPage } from './app.po';

describe('ng2new App', () => {
  let page: Ng2newPage;

  beforeEach(() => {
    page = new Ng2newPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
