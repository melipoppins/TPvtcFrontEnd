import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Emprunt} from '../emprunt';
import {EmpruntService} from '../emprunt.service';
import {Conducteur} from '../../conducteur/conducteur';
import {Vehicule} from '../../vehicule/vehicule';
import {Observable} from 'rxjs';
import {VehiculeService} from '../../vehicule/vehicule.service';
import {ConducteurService} from '../../conducteur/conducteur.service';

@Component({
  selector: 'app-update-emprunt',
  templateUrl: './update-emprunt.component.html',
  styleUrls: ['./update-emprunt.component.css']
})
export class UpdateEmpruntComponent implements OnInit {
  @Output() majListEmprunts = new EventEmitter();
  @Output() disableModif = new EventEmitter();
  @Input() id: number;
  @Input()emprunt: Emprunt;
  conducteur: Conducteur;
  vehicule: Vehicule;
  conducteurs: Observable<Conducteur[]>;
  vehicules: Observable<Vehicule[]>;

  constructor(private route: ActivatedRoute, private router: Router, private empruntService: EmpruntService,
              private vehiculeService: VehiculeService, private conducteurService: ConducteurService) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.vehicules = this.vehiculeService.getVehiculesList();
    this.conducteurs = this.conducteurService.getConducteursList();
  }

  updateEmprunt(): void {
    this.emprunt.conducteur = this.conducteur;
    this.emprunt.vehicule = this.vehicule;
    this.empruntService.updateEmprunt(this.id, this.emprunt)
      .subscribe(data => {
        console.log(data);
        this.emprunt = new Emprunt();
        this.majListEmprunts.emit();
        this.disableModif.emit();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateEmprunt();
  }


}
