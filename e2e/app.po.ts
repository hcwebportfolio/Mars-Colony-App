export class Project5Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('project-5-app h1')).getText();
  }
}
