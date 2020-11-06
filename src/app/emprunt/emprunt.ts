import {Conducteur} from '../conducteur/conducteur';
import {Vehicule} from '../vehicule/vehicule';

export class Emprunt {
  idEmprunt?: number;
  conducteur: Conducteur;
  vehicule: Vehicule;
}
