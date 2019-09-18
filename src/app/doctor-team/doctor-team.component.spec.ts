import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorTeamComponent } from './doctor-team.component';

describe('DoctorTeamComponent', () => {
  let component: DoctorTeamComponent;
  let fixture: ComponentFixture<DoctorTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
