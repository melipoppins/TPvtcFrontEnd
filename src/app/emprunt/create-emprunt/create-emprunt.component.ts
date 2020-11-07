import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Conducteur} from '../../conducteur/conducteur';
import {ConducteurService} from '../../conducteur/conducteur.service';
import {Router} from '@angular/router';
import {Emprunt} from '../emprunt';
import {EmpruntService} from '../emprunt.service';
import {Observable} from 'rxjs';
import {Vehicule} from '../../vehicule/vehicule';
import {VehiculeService} from '../../vehicule/vehicule.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-emprunt',
  templateUrl: './create-emprunt.component.html',
  styleUrls: ['./create-emprunt.component.css']
})
export class CreateEmpruntComponent implements OnInit {
  @Output() majListEmprunts = new EventEmitter();
  emprunt: Emprunt = new Emprunt();
  vehicules: Observable<Vehicule[]>;
  conducteurs: Observable<Conducteur[]>;

  constructor(private empruntService: EmpruntService, private vehiculeService: VehiculeService,
              private conducteurService: ConducteurService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.vehicules = this.vehiculeService.getVehiculesList();
    this.conducteurs = this.conducteurService.getMinConducteursList();
  }

  save(): void {
    this.empruntService.createEmprunt(this.emprunt)
      .subscribe(data => {
          console.log(data);
          this.emprunt = new Emprunt();
          this.majListEmprunts.emit();
      },
      error => console.log(error));
  }

  onSubmit(): void {
    alert('Test');
    this.save();
  }

  gotolist(): void {
    this.router.navigate(['/emprunts']);
  }

}
