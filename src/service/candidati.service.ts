import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { CandidatiDTO } from 'src/dto/candidatidto';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from 'src/dto/logindto';
import { Observable } from 'rxjs';

/**
 * I service sono decorati da @Injectable. 
 * Qui trovate, oltre ai metodi ereditati dall'Abstract,
 *  il metodo per il login (in mirror con il backend).
 * 
 */
@Injectable({
  providedIn: 'root'
})
export class CandidatiService extends AbstractService<CandidatiDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'candidati';
  } 
 
  

}
