import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/service/staff.service';
import { StaffDTO } from 'src/dto/staffdto';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  staff: StaffDTO[];
  stafftoinsert: StaffDTO = new StaffDTO();

  constructor(private service: StaffService) { }

  ngOnInit() {
    this.getStaff();
  }

  getStaff() {
    this.service.getAll().subscribe(staff => this.staff = staff);
  }

  delete(staff: StaffDTO) {
    this.service.delete(staff.id).subscribe(() => this.getStaff());
  }

  update(staff: StaffDTO) {
    this.service.update(staff).subscribe(() => this.getStaff());
  }

  insert(staff: StaffDTO) {
    this.service.insert(staff).subscribe(() => this.getStaff());
  }

  clear(){
    this.stafftoinsert = new StaffDTO();
  }
}
