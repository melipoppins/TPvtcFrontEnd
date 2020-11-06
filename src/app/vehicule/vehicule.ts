import {Emprunt} from '../emprunt/emprunt';

export class Vehicule {
  idVehicule: number;
  marque: string;
  modele: string;
  couleur: string;
  immatriculation: string;
  emprunts: Array<Emprunt>;
}
