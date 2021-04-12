import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { SelezioneDTO } from 'src/dto/selezionedto';
import { HttpClient } from '@angular/common/http';
import { LoginDTO } from 'src/dto/logindto';
import { Observable } from 'rxjs';

/**
 * I service sono decorati da @Injectable. 
 * Qui trovate, oltre ai metodi ereditati dall'Abstract,
 *  il metodo per il login (in mirror con il backend).
 * 
 * @author Vittorio Valent
 * 
 * @see AbstractService
 */
@Injectable({
  providedIn: 'root'
})
export class SelezioneService extends AbstractService<SelezioneDTO>{

  constructor(http: HttpClient) {
    super(http);
    this.type = 'selezione';
  }

  /*login(loginDTO: LoginDTO): Observable<SelezioneDTO> {
    return this.http.post<any>('http://localhost:8080/' + this.type + '/login', loginDTO)
  }*/

}
