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
  emprunts: Observable<Emprunt[]>;

  constructor(private empruntService: EmpruntService, private router: Router) {
  }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.emprunts = this.empruntService.getEmpruntsList();
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

  updateEmprunt(id: number, value: any): void {
    this.router.navigate(['modifieremprunt', id]);

  }
}
