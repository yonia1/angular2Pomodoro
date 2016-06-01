//import { Injectable } from '@angular/core';
//import {Observable} from 'rxjs/Rx';
//import {TimerObservable} from'rxjs/add/observable/timer';
//import 'rxjs/add/operator/map';
/**
 * Timer wrraper Engine

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
    this.timer = (<any>Observable).timer(SECONDSFACTOR,this.currentCountDown);
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
*/
