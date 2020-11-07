import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicule} from '../vehicule';
import {VehiculeService} from '../vehicule.service';

@Component({
  selector: 'app-update-vehicule',
  templateUrl: './update-vehicule.component.html',
  styleUrls: ['./update-vehicule.component.css']
})
export class UpdateVehiculeComponent implements OnInit {
  @Output() majListVehicules = new EventEmitter();
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

  updateVehicule(): void {
    if (confirm('Metttre à jour ce véhicule ?')) {
      this.vehiculeService.updateVehicule(this.id, this.vehicule)
        .subscribe(data => {
          console.log(data);
          this.vehicule = new Vehicule();
          this.majListVehicules.emit();
          this.gotoList();
        }, error => console.log(error));
    }
  }

  onSubmit(): void {
    this.updateVehicule();
  }

  gotoList(): void {
    this.router.navigate(['/vehicules']);

  }
}
