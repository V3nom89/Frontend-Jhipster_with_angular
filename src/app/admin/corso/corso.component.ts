import { Component, OnInit } from '@angular/core';
import { CorsoService } from 'src/service/corso.service';
import { CorsoDTO } from 'src/dto/corsodto';

@Component({
  selector: 'app-corso',
  templateUrl: './corso.component.html',
  styleUrls: ['./corso.component.css']
})
export class CorsoComponent implements OnInit {

    corso: CorsoDTO[];
    corsotoinsert: CorsoDTO = new CorsoDTO();

  constructor(private service: CorsoService) { }

  ngOnInit() {
    this.getCorso();
  }

  getCorso() {
    this.service.getAll().subscribe(corso => this.corso = corso);
  }

  delete(corso: CorsoDTO) {
    this.service.delete(corso.id).subscribe(() => this.getCorso());
  }

  update(corso: CorsoDTO) {
    this.service.update(corso).subscribe(() => this.getCorso());
  }

  insert(corso: CorsoDTO) {
    this.service.insert(corso).subscribe(() => this.getCorso());
  }

  clear(){
    this.corsotoinsert = new CorsoDTO();
  }
}
