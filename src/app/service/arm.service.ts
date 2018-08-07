import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ArmService {

  noOfArms =  new Subject<number>();
  numberOfArm:number;
  constructor() { }

  getArms(){
    this.noOfArms.subscribe((res:number)=>{
      this.numberOfArm = res;
    });
    return this.numberOfArm;
  }

  setArms(no){
    this.noOfArms.next(no);
  }
}
