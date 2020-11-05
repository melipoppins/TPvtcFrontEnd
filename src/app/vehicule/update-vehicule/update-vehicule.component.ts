import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicule} from '../vehicule';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-update-vehicule',
  templateUrl: './update-vehicule.component.html',
  styleUrls: ['./update-vehicule.component.css']
})
export class UpdateVehiculeComponent implements OnInit {
  id: number;
  vehicule: Vehicule;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router, private vehiculeService: VehiculeService) {
  }

  ngOnInit(): void {
    this.vehicule = new Vehicule();

    this.id = this.route.snapshot.params.id;

    this.vehiculeService.getVehicule(this.id)
      .subscribe(data => {
        console.log(data);
        this.vehicule = data;
      }, error => console.log(error));
  }

  updateVehicule(): void {
    this.vehiculeService.updateVehicule(this.id, this.vehicule)
      .subscribe(data => {
        console.log(data);
        this.vehicule = new Vehicule();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateVehicule();
  }

  gotoList(): void {
    this.router.navigate(['/vehicules']);

  }
}
