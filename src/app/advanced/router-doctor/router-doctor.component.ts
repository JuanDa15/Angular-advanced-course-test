import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-doctor',
  templateUrl: './router-doctor.component.html',
  styleUrls: ['./router-doctor.component.css']
})
export class RouterDoctorComponent implements OnInit {

  id: string | null;

  constructor(
    private ar: ActivatedRoute,
    private router: Router
  ) { 
    this.id = null;
  }

  ngOnInit(): void {
    this.ar.params.subscribe({
      next: ({id, ...others}) => {
        console.log(id, others);
        this.id = id;
      }
    })
  }


  saveDoctor() {
    this.router.navigate(['doctor', '123'])
  }

}
