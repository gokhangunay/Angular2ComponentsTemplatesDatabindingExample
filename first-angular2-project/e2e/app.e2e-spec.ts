import { FirstAngular2ProjectPage } from './app.po';

describe('first-angular2-project App', function() {
  let page: FirstAngular2ProjectPage;

  beforeEach(() => {
    page = new FirstAngular2ProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
