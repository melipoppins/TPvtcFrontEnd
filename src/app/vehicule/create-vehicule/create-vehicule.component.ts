import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Vehicule} from '../vehicule';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-create-vehicule',
  templateUrl: './create-vehicule.component.html',
  styleUrls: ['./create-vehicule.component.css']
})
export class CreateVehiculeComponent implements OnInit {
  @Output() majListVehicules = new EventEmitter();
  vehicule: Vehicule = new Vehicule();

  constructor(private vehiculeService: VehiculeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    if (confirm('Créer ce véhicule ?')) {
      this.vehiculeService
        .createVehicule(this.vehicule).subscribe(data => {
          console.log(data);
          this.vehicule = new Vehicule();
          this.majListVehicules.emit();
        },
        error => console.log(error));
    }
  }

  onSubmit(): void {
    this.save();
  }

}
