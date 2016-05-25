import {

  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PomodoroServiceService ,PomodoroPhase} from './pomodoro-service.service';

describe('PomodoroService Service', () => {
  beforeEachProviders(() => [PomodoroServiceService]);

  it('should ...',
    inject([PomodoroServiceService], (service:PomodoroServiceService) => {
      expect(service).toBeTruthy();
    }));

  it('change iteration number  after event',
    inject([PomodoroServiceService], (service:PomodoroServiceService) => {
      service.initPopodoro();
      let currentIteration = service.currentIteration;
      service.onPhaseChange();
      expect(service.currentIteration).toBeGreaterThan(currentIteration);
    }));
  it('changes phase after event',
    inject([PomodoroServiceService], (service:PomodoroServiceService) => {
      service.initPopodoro();
      let phase =(<any> service).phase;
      service.onPhaseChange();
      expect((<any> service).phase).not.toEqual(phase);
    }));


});
