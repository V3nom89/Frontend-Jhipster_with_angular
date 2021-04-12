import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/dto/userdto';
import { SelezioneDTO } from 'src/dto/selezionedto';
import { StaffDTO } from 'src/dto/staffdto';
import { CorsoDTO } from 'src/dto/corsodto';
import { CandidatiDTO} from 'src/dto/candidatidto';

/**
 * Componente della dashboard admin. Nell'ngOnInit recupera
 * l'utente loggato per il messaggio di benvenuto.
 */
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  user: UserDTO;
  selezione: SelezioneDTO;
  staff: StaffDTO;
  corso: CorsoDTO;
  candidati: CandidatiDTO;

  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
  }

 

}
