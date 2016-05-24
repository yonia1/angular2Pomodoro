export class AngularPomodoroPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-pomodoro-app h1')).getText();
  }
}
