import { Component, OnInit, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {Emprunt} from '../emprunt';
import {EmpruntService} from '../emprunt.service';

@Component({
  selector: 'app-emprunt-list',
  templateUrl: './emprunt-list.component.html',
  styleUrls: ['./emprunt-list.component.css']
})
export class EmpruntListComponent implements OnInit {
  emprunt: Emprunt;
  emprunts: Observable<Emprunt[]>;
  isDisabledModif: boolean;
  empruntToUpdate: Emprunt;
  empruntId: number;

  constructor(private empruntService: EmpruntService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
    this.disableModif();
  }

  reloadData(): void {
    this.emprunts = this.empruntService.getEmpruntsList();
  }

  disableModif(): void {
    this.isDisabledModif = true;
  }

  deleteEmprunt(id: number): void {
    this.empruntService.deleteEmprunt(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  empruntDetails(id: number): void {
    this.router.navigate(['detailsemprunt', id]);
  }

  updateEmprunt(id: number, emprunt: Emprunt): void {
    this.isDisabledModif = false;
    this.empruntToUpdate = emprunt;
    this.empruntId = id;

  }

}
