import { browser, element, by } from 'protractor';

export class ItgnetworkPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('itg-root h1')).getText();
  }
}
