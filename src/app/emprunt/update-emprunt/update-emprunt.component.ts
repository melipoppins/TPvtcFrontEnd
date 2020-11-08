import { Component, OnInit } from '@angular/core';
import {Conducteur} from '../../conducteur/conducteur';
import {ActivatedRoute, Router} from '@angular/router';
import {Emprunt} from '../emprunt';
import {EmpruntService} from '../emprunt.service';

@Component({
  selector: 'app-update-emprunt',
  templateUrl: './update-emprunt.component.html',
  styleUrls: ['./update-emprunt.component.css']
})
export class UpdateEmpruntComponent implements OnInit {
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

  updateEmprunt(): void {
    this.empruntService.updateEmprunt(this.id, this.emprunt)
      .subscribe(data => {
        console.log(data);
        this.emprunt = new Emprunt();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.updateEmprunt();
  }

  gotoList(): void {
    this.router.navigate(['/emprunts']);

  }
}
