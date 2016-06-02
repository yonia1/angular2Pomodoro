import { Injectable } from '@angular/core';
import {SoundService} from './sound-service.service'
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
 * First stage using simple timer
 */
@Injectable()
export class PomodoroServiceService {

  constructor(private soundService: SoundService) {
    this.initPopodoro();
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
  /**
   *
   */
  private isRunning:boolean;
  /**
   *
   */
  private phase:PomodoroPhase;
  /**
   *
   */
  private timer : number;

  private activeTimer :any;

  /**
   *
   * @param config
   */
  public initPopodoro(config?: PomodroConfig  ) {
    this.clean();
    this.currentIteration = 1;
    this.isRunning = false;
    this.phase = PomodoroPhase.INIT;
    this.numberOfSprints = config && config.numberOfSprints || 4;
    this.short_break_duration = config && config.short_break_duration || 5;
    this.sprint_duration =config && config.sprint_duration || 25;
    this.long_break_duration =config && config.long_break_duration || 15;
    this.timer = this.sprint_duration;


  }
  public reset() {
    this.isRunning = false;
    this.clean();
    this.initPopodoro();
    //this.startPomodoro();
  }
  /**
   *
   */
  public pausePomodoro() {
    this.isRunning = false;
    this.clean();


  }
  public resume() {
    this.isRunning = true;
    this.continuePomodoro();
  }
  private clean(){
      clearTimeout(this.activeTimer);
      this.activeTimer = null;
      }

  /**
   *
   */
  startPomodoro() {
    this.isRunning = true;
    this.onPhaseChange();
  }
  /**
   *
   */
  public continuePomodoro() {
     if ( ! this.isRunning) return;
     this.activeTimer = window.setTimeout(
      ()=>{

        console.log('timer fire');

        this.timer--;
        if(! this.isRunning) return ;
        if(this.timer > 0 && this.isRunning) this.continuePomodoro();
        else if ( this.isRunning ) this.onPhaseChange();
      }
      ,1000);
  }

  /**
   * Switch from phase 2 phase
   * when timer has finish the current phase
   */
  public onPhaseChange() {


    console.log(this.phase);
    switch (this.phase) {
      case  PomodoroPhase.INIT :
      {
        this.phase = PomodoroPhase.SPRINT;
        this.timer = this.sprint_duration;
        break;
      }
      case  PomodoroPhase.SPRINT :
      {

        if (this.currentIteration < this.numberOfSprints) {

          this.phase = PomodoroPhase.SHORT_BREAK;
          this.timer = this.short_break_duration;
          this.alert();
       //   this.continuePomodoro();


        }
        else {
          console.log('sprint finsh moving to long break')
          this.phase = PomodoroPhase.LONG_BREAK;
          this.timer = this.long_break_duration;
          this.alert();
          //   this.continuePomodoro();
        }
        break;

      }
    /**
     * In this case we move back to the pomodoro
     */
      case  PomodoroPhase.SHORT_BREAK :
      {
        this.currentIteration++;
        this.phase = PomodoroPhase.SPRINT;
        this.alert();
        this.timer = this.sprint_duration;
       // this.continuePomodoro();
        break;
      }
      // Pomodoro cycle has finished
      case  PomodoroPhase.LONG_BREAK :
      {
        this.alert();
        this.currentIteration++;
        this.initPopodoro();
        return;
      }



    } // End switch
    console.log('current iteration ' +this.currentIteration);
    console.log(this.phase);
    this.continuePomodoro();

  }

  private alert(){
    this.soundService.alert();
      }
}
