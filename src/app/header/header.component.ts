import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // @ViewChild('firstDetails', {static: false}) private firstDetails: ElementRef;
  headerGap: number;
  isScrolled = false;

  constructor() { }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
    // console.log($event['Window']);
     console.log("scrolling");
     if(document.documentElement.scrollTop > 50) {
      document.getElementById('navBar').classList.add('fixed-top');
     } else {
      document.getElementById('navBar').classList.remove('fixed-top');
     }
     
  }

  ngOnInit() {

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
    document.getElementById("mySidenav").style.width = "250px";
  }
  
   closeSideNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

}
