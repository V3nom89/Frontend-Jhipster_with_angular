import { Component, OnInit } from '@angular/core';
import { CandidatiDTO } from 'src/dto/candidatidto';
import { CandidatiService } from 'src/service/candidati.service';

@Component({
  selector: 'app-candidati',
  templateUrl: './candidati.component.html',
  styleUrls: ['./candidati.component.css']
})
export class CandidatiComponent implements OnInit {

  candidati: CandidatiDTO[];
  candidatitoinsert: CandidatiDTO = new CandidatiDTO();

  constructor(private service: CandidatiService) { }

  ngOnInit() {
    this.getCandidati();
  }

  getCandidati() {
    this.service.getAll().subscribe(candidati => this.candidati = candidati);
  }

  delete(candidati: CandidatiDTO) {
    this.service.delete(candidati.id).subscribe(() => this.getCandidati());
  }

  update(candidati: CandidatiDTO) {
    this.service.update(candidati).subscribe(() => this.getCandidati());
  }

  insert(candidati: CandidatiDTO) {
    this.service.insert(candidati).subscribe(() => this.getCandidati());
  }

  clear(){
    this.candidatitoinsert = new CandidatiDTO();
  }
}
