import { Component } from '@angular/core';
import { ArmService } from './service/arm.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  armLength:number;
  arms=[];
  angle=0;
  rotationAngle = 0;
  constructor(public armService:ArmService){
  }

  ngOnInit(){
    this.initializeArms();
    this.armService.noOfArms.subscribe((res:number)=>{
      this.armLength = Number(res);
      this.displayArms();
    });
  }

  initializeArms(){
   this.armLength = this.armService.getArms();
  }

  // function to display arms dynamically
  displayArms(){
    switch(this.armLength){
      case  2:
        this.arms= [1,2]
        console.log('creating 2 arm junction');
        this.angle = 90;
        break;

        case  3:
          this.arms= [1,2,3]
          console.log('creating 3 arm junction');
          this.angle = 90;
          break;

        case  4:
        this.arms= [1,2,3,4]
          console.log('creating 4 arm junction');
          this.angle = 90;
          break;

        case  5:
        this.arms= [1,2,3,4,5]
          console.log('creating 5 arm junction');
          this.angle = 72;
          break;

        case  6:
        this.arms= [1,2,3,4,5,6]
          console.log('creating 6 arm junction');
          this.angle = 60;
          break;

        case  7:
        this.arms= [1,2,3,4,5,6,7]
          console.log('creating 7 arm junction');
          this.angle = 51.42;
          break;

        case  8:
        this.arms= [1,2,3,4,5,6,7,8]
          console.log('creating 8 arm junction');
          this.angle = 45;
          break;

        default:
          console.log('hello i am in default '+this.armLength);
    }
  }

  // function to rotate the junction
  rotate(direction){
    let box = document.getElementById('svg');
    let rotationAngle = 0;
    if(direction == 'left'){
      this.rotationAngle += 45;
    }
    else{
      this.rotationAngle -= 45;
    }
    box.style.transform = `rotate(${this.rotationAngle}deg)`

  }

// function to toggle lamps

toggleLamp(e){
 let green_left = document.querySelectorAll('[data-lamp="green_left"]');
  if(e.target.value == 'Green Right'){
    green_left[0].classList.toggle('active')
    document.getElementById('flash1').classList.toggle('hide');
  }

}

// to flash the lamp
toggleFlash(e){
  let green_left = document.querySelectorAll('[data-lamp="green_left"]');
  green_left[0].classList.toggle('flash')
}

showArm(){
    let arm = document.getElementById('selected_arm')
    arm.style.display="block"
}
}
