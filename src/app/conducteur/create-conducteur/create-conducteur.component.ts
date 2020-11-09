import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Conducteur} from '../conducteur';
import {ConducteurService} from '../conducteur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-conducteur',
  templateUrl: './create-conducteur.component.html',
  styleUrls: ['./create-conducteur.component.css']
})
export class CreateConducteurComponent implements OnInit {
  @Output() majListConducteurs = new EventEmitter();
  conducteur: Conducteur = new Conducteur();

  constructor(private conducteurService: ConducteurService, private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    if (confirm('Créer ce conducteur ?')) {
      this.conducteurService
        .createConducteur(this.conducteur).subscribe(data => {
          console.log(data);
          this.conducteur = new Conducteur();
          this.majListConducteurs.emit();
        },
        error => console.log(error));
    }
  }

  onSubmit(): void {
    this.save();
  }

}
