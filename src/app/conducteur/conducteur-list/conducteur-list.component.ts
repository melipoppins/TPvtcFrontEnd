import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Observable} from 'rxjs';
import {Conducteur} from '../conducteur';
import {ConducteurService} from '../conducteur.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-conducteur-list',
  templateUrl: './conducteur-list.component.html',
  styleUrls: ['./conducteur-list.component.css']
})
export class ConducteurListComponent implements OnInit {
  conducteur: Conducteur;

  conducteurs: Observable<Conducteur[]>;

  constructor(private conducteurService: ConducteurService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.conducteurs = this.conducteurService.getConducteursList();
  }

  deleteConducteur(id: number): void {
    if (confirm('Supprimer le conducteur ?')) {
      this.conducteurService.deleteConducteur(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }
  }

  conducteurDetails(id: number): void {
    this.router.navigate(['detailsconducteur', id]);
  }

  updateConducteur(id: number, value: any): void {

    this.router.navigate(['modifierconducteur', id]);

  }
}
