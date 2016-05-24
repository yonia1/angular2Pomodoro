import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { AngularPomodoroAppComponent } from '../app/angular-pomodoro.component';

beforeEachProviders(() => [AngularPomodoroAppComponent]);

describe('App: AngularPomodoro', () => {
  it('should create the app',
      inject([AngularPomodoroAppComponent], (app: AngularPomodoroAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-pomodoro works!\'',
      inject([AngularPomodoroAppComponent], (app: AngularPomodoroAppComponent) => {
    expect(app.title).toEqual('angular-pomodoro works!');
  }));
});
