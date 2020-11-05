import {Component, Input, OnInit} from '@angular/core';
import {Conducteur} from '../conducteur';
import {ConducteurService} from '../conducteur.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-conducteur',
  templateUrl: './create-conducteur.component.html',
  styleUrls: ['./create-conducteur.component.css']
})
export class CreateConducteurComponent implements OnInit {
  @Input() conducteur: Conducteur = new Conducteur();
  submitted = false;

  constructor(private conducteurService: ConducteurService, private router: Router) {
  }

  ngOnInit(): void {
  }

  newConducteur(): void {
    this.submitted = false;
    this.conducteur = new Conducteur();
  }

  save(): void {
    this.conducteurService
      .createConducteur(this.conducteur).subscribe(data => {
        console.log(data);
        this.conducteur = new Conducteur();
        this.gotolist();
      },
      error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotolist(): void {
    this.router.navigate(['/conducteurs']);
  }
}