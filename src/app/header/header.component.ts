import { Component, OnInit, ViewChild,HostListener } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
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
  serviceActive = false;
  constructor(private router : Router) { 
      
    }
  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
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
    
    this.router.events.subscribe(event  => {
      if(event instanceof  NavigationEnd) {
        if(!event.url.includes('med-services')) {
          this.serviceActive = false;
        }
      }
    });
    
  }

   openSideNav() {
    document.getElementById("mySidenav").style.width = "50%";
  }
  
   closeSideNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  navigateToServices(id) {
    this.router.navigate(['med-services'],{ queryParams: { selectedServiceId: id } });
  }

 isActive(url) {
   if(this.router.url.includes(url)){
     return 'active-link'
   }
 }

 test(rla) {
   if(rla && rla.isActive) {
    this.serviceActive = true;
   }
 }
}
