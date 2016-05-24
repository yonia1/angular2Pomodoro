import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PomodoroServiceService } from './pomodoro-service.service';

describe('PomodoroService Service', () => {
  beforeEachProviders(() => [PomodoroServiceService]);

  it('should ...',
      inject([PomodoroServiceService], (service: PomodoroServiceService) => {
    expect(service).toBeTruthy();
  }));
});
