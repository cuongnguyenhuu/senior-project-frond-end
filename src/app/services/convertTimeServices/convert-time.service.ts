import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertTimeService {

  constructor() { }

  public timeToInt(time:string): number{
    var unit:string[] = time.split(":");
    return parseInt(unit[0])*60*60+parseInt(unit[1])*60;
  }

  public intToTime(number:number) : string{
    var hours = Math.floor(number/3600);
    var minutes = (number-3600*hours)/60;
    if(minutes<10){
      return hours+":0"+minutes;
    }
    // if(hours<10){
    //   return "0"+hours+":"+minutes;
    // }
    return hours+":"+minutes;
  }
}
