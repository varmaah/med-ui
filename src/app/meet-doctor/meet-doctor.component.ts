import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meet-doctor',
  templateUrl: './meet-doctor.component.html',
  styleUrls: ['./meet-doctor.component.css']
})
export class MeetDoctorComponent implements OnInit {
  programs = [{
     title : 'Quality Achievement Award',
     path: '../../assets/icon28.png'
   },
   {
     title : 'Top Hospitals in the Nation',
     path: '../../assets/icon30.png'
   },
   {
     title : 'Top Performer of The Year',
     path: '../../assets/icon18.png'
   },
   {
     title : 'Quality & Accreditation',
     path: '../../assets/icon31.png'
   }];

  constructor() { }

  ngOnInit() {
  }

}
