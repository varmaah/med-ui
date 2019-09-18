import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { getServices } from '../med-services/med-services.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('firstDetails', {static: false}) private firstDetails: ElementRef;
  @ViewChild('sideNav', {static: false}) sideNavRef : any;
  @ViewChild('hamBurger', {static: false}) hamBurgerRef : any;
  headerGap: number;
  isScrolled = false;
  medicalServices : any =[]
  constructor(private router : Router) { 
  }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    // console.log($event['Window']);
     console.log("scrolling");
     if( document.getElementById('navBar')) {
     if(document.documentElement.scrollTop > 50) {
      document.getElementById('navBar').classList.add('fixed-top');
     } else {
      document.getElementById('navBar').classList.remove('fixed-top');
     }
    }  
  }

  @HostListener('document:click', ['$event.target'])
  
  public onClick(targetElement) {
    const clickedInside = this.sideNavRef.nativeElement.contains(targetElement);
    const isHamBurgerIconClicked = this.hamBurgerRef.nativeElement.contains(targetElement);

    if (!clickedInside && !isHamBurgerIconClicked) {
     this.closeSideNav();
    }
  }


  ngOnInit() {
    this.medicalServices = getServices();
    // $(document).ready(function() {
  
    //   $(window).scroll(function () {
    //       //if you hard code, then use console
    //       //.log to determine when you want the 
    //       //nav bar to stick.  
    //       console.log($(window).scrollTop())
    //     if ($(window).scrollTop() > 280) {
    //       $('#nav_bar').addClass('navbar-fixed');
    //     }
    //     if ($(window).scrollTop() < 281) {
    //       $('#nav_bar').removeClass('navbar-fixed');
    //     }
    //   });
    // });
    // setTimeout(() => {
      
    // this.headerGap = this.firstDetails.nativeElement.offsetHeight;
    // }, 1000);
    
  }

   openSideNav() {
    document.getElementById("mySidenav").style.width = "30%";
  }
  
   closeSideNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  navigateToServices(id) {
    this.router.navigate(['med-services'],{ queryParams: { selectedServiceId: id } });
  }

 isActive(url) {
   if(this.router.url.includes(url)){
     console.log('innnn')
     return 'active-link'
   }
 }
}
