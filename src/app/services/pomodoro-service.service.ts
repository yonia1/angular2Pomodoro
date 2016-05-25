import { Injectable } from '@angular/core';

export enum PomodoroPhase{
  SPRINT, SHORT_BREAK, LONG_BREAK, INIT
}
export interface PomodroConfig {

  numberOfSprints : number;

  sprint_duration : number;

  short_break_duration : number ;

  long_break_duration : number;
}

/**
 * Creating a basic timer with default values
 */
@Injectable()
export class PomodoroServiceService {

  constructor() {
  }

  /**
   *How many Iterations should the pomodoro run
   */
  private numberOfSprints:number;
  /**
   *How long each spring should take
   */
  private sprint_duration:number;
  /**
   * How long should the short break take
   */
  private short_break_duration:number;
  /**
   *How long should the long break take ;
   */
  private long_break_duration:number;

  /**
   *
   */
  public currentIteration:number;

  private isRunning:boolean;

  private phase:PomodoroPhase;

  /**
   *
   * @param config
   */
  public initPopodoro(config?: PomodroConfig  ) {

    this.currentIteration = 1;
    this.isRunning = false;
    this.phase = PomodoroPhase.INIT;
    this.numberOfSprints = config && config.numberOfSprints || 4;
    this.short_break_duration = config && config.short_break_duration || 5;
    this.sprint_duration =config && config.sprint_duration || 25;
    this.long_break_duration =config && config.long_break_duration || 15;


  }

  /**
   *
   */
  public pausePomodoro() {
    this.isRunning = false;


  }

  /**
   *
   */
  public continuePomodoro() {
    this.isRunning = true;
  }

  /**
   * Switch from phase 2 phase
   * when timer has finish the current phase
   */
  public onPhaseChange() {

    this.currentIteration++;

    switch (this.phase) {
      case  PomodoroPhase.INIT :
      {
        this.phase = PomodoroPhase.SPRINT;
        break;
      }
      case  PomodoroPhase.SPRINT :
      {
        if (this.currentIteration < this.numberOfSprints) {
          this.phase = PomodoroPhase.SHORT_BREAK;


        }
        else
          this.phase = PomodoroPhase.LONG_BREAK;

        break;

      }
    /**
     * In this case we move back to the pomodoro
     */
      case  PomodoroPhase.SHORT_BREAK :
      {
        this.phase = PomodoroPhase.SPRINT;
        break;
      }
      // Pomodoro cycle has finished
      case  PomodoroPhase.LONG_BREAK :
      {
        this.initPopodoro();
        return;
      }



    } // End switch


  }
}
