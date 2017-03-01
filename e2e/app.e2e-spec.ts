import { AngularJsForBlogPage } from './app.po';

describe('angular-js-for-blog App', function() {
  let page: AngularJsForBlogPage;

  beforeEach(() => {
    page = new AngularJsForBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
