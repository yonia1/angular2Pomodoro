import { AngularPomodoroPage } from './app.po';

describe('angular-pomodoro App', function() {
  let page: AngularPomodoroPage;

  beforeEach(() => {
    page = new AngularPomodoroPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-pomodoro works!');
  });
});
