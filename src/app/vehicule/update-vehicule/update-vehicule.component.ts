import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Vehicule} from '../vehicule';
import {VehiculeService} from '../vehicule.service';
import {Conducteur} from '../../conducteur/conducteur';

@Component({
  selector: 'app-update-vehicule',
  templateUrl: './update-vehicule.component.html',
  styleUrls: ['./update-vehicule.component.css']
})
export class UpdateVehiculeComponent implements OnInit {
  @Output() majListVehicules = new EventEmitter();
  @Output() disableModif = new EventEmitter();
  @Input() id: number;
  @Input() vehicule: Vehicule;

  constructor(private route: ActivatedRoute, private router: Router, private vehiculeService: VehiculeService) {
  }

  ngOnInit(): void {
  }

  updateVehicule(): void {
    if (confirm('Mettre à jour ce véhicule ?')) {
      this.vehiculeService.updateVehicule(this.id, this.vehicule)
        .subscribe(data => {
          console.log(data);
          this.vehicule = new Vehicule();
          this.majListVehicules.emit();
        }, error => console.log(error));
    }
  }

  onSubmit(): void {
    this.updateVehicule();
  }

  cancel(): void {
    this.disableModif.emit();
  }
}
