import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctor-team',
  templateUrl: './doctor-team.component.html',
  styleUrls: ['./doctor-team.component.css']
})
export class DoctorTeamComponent implements OnInit {
readonly departments = [{
  name: 'Primary Health Care',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. '
},
{
  name: 'Cardiology specialist',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. '
},
{
  name: 'Ophthalmology Clinic',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. '
}
]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  contactNav() {
    this.router.navigate(['/' + 'contact-us']);
    window.scroll(0, 0);
  }

}
