import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  arms:any;
  angle=0;
  // noOfArms:number;
  constructor(){
    this.initializeArms();
  }

  initializeArms(){
    
    this.arms=[1,2,3,4,5]
   
    switch(this.arms.length){
      case  2:
        console.log('creating 2 arm junction');
        this.angle = 90;
        break;

        case  3:
          console.log('creating 3 arm junction');
          this.angle = 90;
          break;

        case  4:
          console.log('creating 4 arm junction');
          this.angle = 90;
          break;

        case  5:
          console.log('creating 5 arm junction');
          this.angle = 72;
          break;

        case  6:
          console.log('creating 6 arm junction');
          this.angle = 60;
          break;

        case  7:
          console.log('creating 7 arm junction');
          this.angle = 51.42;
          break;

        case  8:
          console.log('creating 8 arm junction');
          this.angle = 45;
          break;
    }

  }
}
