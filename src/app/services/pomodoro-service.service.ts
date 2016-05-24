import { Injectable } from '@angular/core';

export enum PomodoroPhase{
  SPRINT, SHORT_BREAK, LONG_BREAK,INIT
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


  private currentIteration:number;

  private isRunning : boolean;

  private phase : PomodoroPhase;
  /**
   *
   * @param config
   */
  public initPopodoro(config?:PomodroConfig) {

    this.currentIteration = 1;
    this.isRunning = false;
    this.phase = PomodoroPhase.INIT;
    this.numberOfSprints = config.numberOfSprints || 4;
    this.short_break_duration = config.short_break_duration || 5;
    this.sprint_duration = config.sprint_duration || 25;
    this.long_break_duration = config.long_break_duration || 15;


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

  }
}
