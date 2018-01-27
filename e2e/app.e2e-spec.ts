import { GridIssuePage } from './app.po';

describe('grid-issue App', () => {
  let page: GridIssuePage;

  beforeEach(() => {
    page = new GridIssuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
