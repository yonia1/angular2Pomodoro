import { Component } from '@angular/core';

import { PomodoroServiceService } from './services/pomodoro-service.service';


@Component({

  selector: 'angular-pomodoro-app',
  templateUrl: 'app/angular-pomodoro.component.html',
  styleUrls: ['app/angular-pomodoro.component.css'],
  providers: [PomodoroServiceService]
})
export class AngularPomodoroAppComponent {

  constructor(private pomodoro: PomodoroServiceService) {

  }

  public title = 'angular-pomodoro works!';
  config = {
    numberOfSprints : 4,

    sprint_duration : 25,

     short_break_duration : 5 ,

    long_break_duration : 15,
  };


  onStart() {
    this.pomodoro.initPopodoro(this.config);
    this.pomodoro.startPomodoro();
  }

  onPause() {
    this.pomodoro.pausePomodoro();
  }

  onResume() {
    this.pomodoro.resume();
  }

  onReset() {
    this.pomodoro.reset();
  }

}
