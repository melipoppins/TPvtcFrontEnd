import { Component, OnInit } from '@angular/core';
import {Conducteur} from '../../conducteur/conducteur';
import {ActivatedRoute, Router} from '@angular/router';
import {EmpruntService} from '../emprunt.service';
import {Emprunt} from '../emprunt';

@Component({
  selector: 'app-emprunt-details',
  templateUrl: './emprunt-details.component.html',
  styleUrls: ['./emprunt-details.component.css']
})
export class EmpruntDetailsComponent implements OnInit {
  id: number;
  emprunt: Emprunt;

  constructor(private route: ActivatedRoute, private router: Router, private empruntService: EmpruntService) {
  }

  ngOnInit(): void {
    this.emprunt = new Emprunt();

    this.id = this.route.snapshot.params.id;

    this.empruntService.getEmprunt(this.id)
      .subscribe(data => {
        console.log(data);
        this.emprunt = data;
      }, error => console.log(error));
  }

  list(): void {
    this.router.navigate(['/emprunts']);
  }
}
