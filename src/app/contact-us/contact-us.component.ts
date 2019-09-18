import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  lat = 33.6783823;
  lng = -96.6035765;

  constructor() { }

  ngOnInit() {
  }

}
