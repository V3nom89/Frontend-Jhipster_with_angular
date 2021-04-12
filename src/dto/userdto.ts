import { InstantiateExpr } from '@angular/compiler';
import {Usertype} from './usertype';

/**
 * Classe DTO di User. DEVE essere uguale (stesso nome classe, stessi attributi e stessi nomi) a
 * quello nel backend. 
 * 
 * @see Usertype
 * 
 * @author Vittorio Valent
 */
export class UserDTO {

   id: number;

   login: String;

   firstName: String;

   lastName: String;

   email: String;

   imageUrl: String;

   activated: Boolean;

   langKey: String;

   createdBy: String;

   createdDate: Date;

   lastModifiedBy: String;

   lastModifiedDate: Date;

   authorities: String;

}

