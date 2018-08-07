import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ArmService } from '../service/arm.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  noOfArms:number;
  constructor(public armService:ArmService,      
  ) { }

  ngOnInit() {
  }

  setArms(noOfArms:number){
    // this.armService.setArms(this.noOfArms);
    this.armService.noOfArms.next(noOfArms);
    console.log(noOfArms)
  }

}
