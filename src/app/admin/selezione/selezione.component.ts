import { Component, OnInit } from '@angular/core';
import { SelezioneService } from 'src/service/selezione.service';
import { SelezioneDTO } from 'src/dto/selezionedto';

@Component({
  selector: 'app-selezione',
  templateUrl: './selezione.component.html',
  styleUrls: ['./selezione.component.css']
})
export class SelezioneComponent implements OnInit {

  selezione: SelezioneDTO[];
  selezionetoinsert: SelezioneDTO = new SelezioneDTO();

  constructor(private service: SelezioneService) { }

  ngOnInit() {
    this.getSelezione();
  }

  getSelezione() {
    this.service.getAll().subscribe(selezione => this.selezione = selezione);
  }

  delete(selezione: SelezioneDTO) {
    this.service.delete(selezione.id).subscribe(() => this.getSelezione());
  }

  update(selezione: SelezioneDTO) {
    this.service.update(selezione).subscribe(() => this.getSelezione());
  }

  insert(selezione: SelezioneDTO) {
    this.service.insert(selezione).subscribe(() => this.getSelezione());
  }

  clear(){
    this.selezionetoinsert = new SelezioneDTO();
  }
}
