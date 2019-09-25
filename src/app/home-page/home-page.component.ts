import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
 //TODO: Move to appropriate service
  programs = [{
   description :'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
    title : 'Adolescence to  Menopause'
  },
  {
   description :'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
    title : 'Brest Health Program'
  },
  {
   description :'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
    title : 'Integrated  Digestive, Liver'
  },
  {
   description :'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
    title : 'Kidney Transplantation'
  },
  {
   description :'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
    title : 'Liver Transplantation Surgery'
  },
  {
   description :'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
    title : 'Total Knee Replacement'
  },
  {
   description :'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
    title : 'Total Hip Replacement'

  },
  {
   description :'etiam non quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit ',
    title : 'Heart Screening Surgery'
  }];

  constructor(private router: Router) {

   }

  ngOnInit() {
  }

  contactNav() {
    this.router.navigate(['/' + 'contact-us']);
    window.scroll(0, 0);
  }
  goToTeam() {
    this.router.navigate(['/' + 'med-services']);
    window.scroll(0, 0);
  }
  goToDr1() {
    this.router.navigate(['/' + 'dr1-detail']);
    window.scroll(0, 0);
  }
  goToServices() {
    this.router.navigate(['/' + 'med-services']);
    window.scroll(0, 0);
  }
  goToDr2() {
    this.router.navigate(['/' + 'dr2-detail']);
    window.scroll(0, 0);
  }

}
