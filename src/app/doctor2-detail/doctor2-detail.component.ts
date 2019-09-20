import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor2-detail',
  templateUrl: './doctor2-detail.component.html',
  styleUrls: ['./doctor2-detail.component.css']
})
export class Doctor2DetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  contactNav() {
    this.router.navigate(['/' + 'contact-us']);
    window.scroll(0, 0);
  }

}
