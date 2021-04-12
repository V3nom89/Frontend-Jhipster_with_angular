import { NumberValueAccessor } from '@angular/forms/src/directives';
import {Usertype} from './usertype';

/**
 * Classe DTO di User. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @see Usertype
 * 
 * @author Nicolò Paolangeli
 */
export class SelezioneDTO {

   id: number;

   idCandidatiId: number;

   idEsaminatoreId: number;

   punteggioLogica: number;

   punteggioInglese: number;

   punteggioSql: number;

   punteggioHtmlCss: number;

   punteggioJava: number;
   
   punteggioTotaleScrittto: number;

   dataTestScritto: String;

   dataTestOrale: String;

   valutazioneTestGruppo: number;

   valutazioneColloquioTecnico: number;

}

