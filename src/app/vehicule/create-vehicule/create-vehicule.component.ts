import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Vehicule} from '../vehicule';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-create-vehicule',
  templateUrl: './create-vehicule.component.html',
  styleUrls: ['./create-vehicule.component.css']
})
export class CreateVehiculeComponent implements OnInit {
  vehicule: Vehicule = new Vehicule();
  submitted = false;

  constructor(private vehiculeService: VehiculeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  newVehicule(): void {
    this.submitted = false;
    this.vehicule = new Vehicule();
  }

  save(): void {
    this.vehiculeService
      .createVehicule(this.vehicule).subscribe(data => {
        console.log(data);
        this.vehicule = new Vehicule();
        this.gotolist();
      },
      error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotolist() {
    this.router.navigate(['/vehicules']);
  }
}
