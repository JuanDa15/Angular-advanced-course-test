import { Component, OnInit } from '@angular/core';
import { DoctorServiceService } from './doctor-service.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  doctors: any[];

  constructor(
    public doctorService: DoctorServiceService
  ) { 
    this.doctors = [];
  }

  ngOnInit(): void {
  }


  getDoctors(){
    this.doctorService.getDoctors().subscribe({
      next: (val: any) => {
        this.doctors = val;
      }
    })
  }

}
