import { ItgnetworkPage } from './app.po';

describe('itgnetwork App', function() {
  let page: ItgnetworkPage;

  beforeEach(() => {
    page = new ItgnetworkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('itg works!');
  });
});
