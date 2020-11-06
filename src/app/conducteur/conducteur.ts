import {Emprunt} from '../emprunt/emprunt';

export class Conducteur {
  idConducteur: number;
  nom: string;
  prenom: string;
  emprunts: Array<Emprunt>;
}
