import { Injectable } from '@angular/core';
import {Observable,IntervalObservable} from '../../../tmp/vendor-input_base_path-EtAM5fM1.tmp/0/rxjs/Rx.d';
/**
 * Timer wrraper Engine
 */
const SECONDSFACTOR =  1000;

@Injectable()
export class TimerServiceService {

  constructor() {
    this.currentCountDown = 60 * SECONDSFACTOR ; // one minute
  }

  private currentCountDown : number;
  private timer : Observable;
  private emit() {

  }

  start(seconds : number) : Observable{
    this.currentCountDown = seconds * SECONDSFACTOR;
    this.timer = (<any>Observable).tigit mer(1000,this.currentCountDown);
    this.timer.subscribe( ()=>{
      this.currentCountDown--;
    });
    return this.timer;
  }

  pause() {

  }

  stop() {

  }

}
