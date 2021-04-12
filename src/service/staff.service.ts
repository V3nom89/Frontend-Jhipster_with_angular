import { Injectable } from '@angular/core';
import { AbstractService } from './abstractservice';
import { StaffDTO } from 'src/dto/staffdto';
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
export class StaffService extends AbstractService<StaffDTO>{

    constructor(http: HttpClient) {
        super(http);
        this.type = 'staff';
    }

    login(loginDTO: LoginDTO): Observable<StaffDTO> {
        return this.http.post<any>('http://localhost:8080/' + this.type + '/login', loginDTO)
    }

}
