//import { Staff } from './Staff';
import { NumberValueAccessor } from '@angular/forms/src/directives';

/**
 * Classe DTO di User. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @see Usertype
 * 
 * @author Vittorio Valent
 */
export class StaffDTO {

    id: number;

    nome: string;

    cognome: string;

    email: string;

    codiceFiscale: string;

    numeroTelefono: string;

    posizione: string;

    dataAssunzione: string;

    cliente: string;

    sede: string;

    oreSettimanali: number;
  
}

