import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicule} from '../vehicule';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-vehicule-details',
  templateUrl: './vehicule-details.component.html',
  styleUrls: ['./vehicule-details.component.css']
})
export class VehiculeDetailsComponent implements OnInit {
  id: number;
  vehicule: Vehicule;

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

  list(): void {
    this.router.navigate(['/vehicules']);
  }
}
