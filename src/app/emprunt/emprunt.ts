import {Conducteur} from '../conducteur/conducteur';
import {Vehicule} from '../vehicule/vehicule';

export class Emprunt {
  idEmprunt: number;
  conducteurs: Conducteur[];
  vehicules: Vehicule[];
}
