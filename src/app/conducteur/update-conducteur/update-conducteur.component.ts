import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Conducteur} from '../conducteur';
import {ActivatedRoute, Router} from '@angular/router';
import {ConducteurService} from '../conducteur.service';

@Component({
  selector: 'app-update-conducteur',
  templateUrl: './update-conducteur.component.html',
  styleUrls: ['./update-conducteur.component.css']
})
export class UpdateConducteurComponent implements OnInit {
  @Output() majListConducteurs = new EventEmitter();
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

  updateConducteur(): void {
    if (confirm('Mettre à jour ce conducteur ?')) {
      this.conducteurService.updateConducteur(this.id, this.conducteur)
        .subscribe(data => {
          console.log(data);
          this.conducteur = new Conducteur();
          this.majListConducteurs.emit();
          this.gotoList();
        }, error => console.log(error));
    }
  }

  onSubmit(): void {
    this.updateConducteur();
  }

  gotoList(): void {
    this.router.navigate(['/conducteurs']);

  }
}
