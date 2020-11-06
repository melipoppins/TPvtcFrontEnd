import { Component, OnInit } from '@angular/core';
import {Conducteur} from '../../conducteur/conducteur';
import {ConducteurService} from '../../conducteur/conducteur.service';
import {Router} from '@angular/router';
import {Emprunt} from '../emprunt';
import {EmpruntService} from '../emprunt.service';
import {Observable} from 'rxjs';
import {Vehicule} from '../../vehicule/vehicule';
import {VehiculeService} from '../../vehicule/vehicule.service';

@Component({
  selector: 'app-create-emprunt',
  templateUrl: './create-emprunt.component.html',
  styleUrls: ['./create-emprunt.component.css']
})
export class CreateEmpruntComponent implements OnInit {
  emprunt: Emprunt = new Emprunt();
  vehicules: Observable<Vehicule[]>;

  submitted = false;

  constructor(private empruntService: EmpruntService, private vehiculeService: VehiculeService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.vehicules = this.vehiculeService.getVehiculesList();
  }

  newEmprunt(): void {
    this.submitted = false;
    this.emprunt = new Emprunt();
  }

  save(): void {
    this.empruntService
      .createEmprunt(this.emprunt).subscribe(data => {
        console.log(data);
        this.emprunt = new Emprunt();
        this.gotolist();
      },
      error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotolist(): void {
    this.router.navigate(['/emprunts']);
  }
}
