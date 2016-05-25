import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { TimerServiceService } from './timer-service.service.ts';

describe('TimerService Service', () => {
  beforeEachProviders(() => [TimerServiceService]);

  it('should ...',
      inject([TimerServiceService], (service: TimerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
