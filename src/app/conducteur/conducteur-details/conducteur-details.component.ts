import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Conducteur} from '../conducteur';
import {ConducteurService} from '../conducteur.service';

@Component({
  selector: 'app-conducteur-details',
  templateUrl: './conducteur-details.component.html',
  styleUrls: ['./conducteur-details.component.css']
})
export class ConducteurDetailsComponent implements OnInit {
  id: number;
  conducteur: Conducteur;

  constructor(private route: ActivatedRoute, private router: Router, private conducteurService: ConducteurService) {
  }

  ngOnInit(): void {
    this.conducteur = new Conducteur();

    this.id = this.route.snapshot.params.id;

    this.conducteurService.getConducteur(this.id)
      .subscribe(data => {
        console.log(data);
        this.conducteur = data;
      }, error => console.log(error));
  }

  list(): void {
    this.router.navigate(['/conducteurs']);
  }
}
