import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  isUserCollapsed = false;
  isClientCollapsed = false;
  isAccountCollapsed = false;
  isCandidatiCollapsed = false;
  isSelezioneCollapsed = false;
  isCorsoCollapsed = false;
  isStaffCollapsed = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }

  userscollapse() {
    if (this.isUserCollapsed === false) {
      this.isUserCollapsed = true;
    } else { this.isUserCollapsed = false; }
  }

  candidaticollapse() {
    if (this.isCandidatiCollapsed === false) {
      this.isCandidatiCollapsed = true;
    } else { this.isCandidatiCollapsed = false; }
  }

  selezionecollapse() {
    if (this.isSelezioneCollapsed === false) {
      this.isSelezioneCollapsed = true;
    } else { this.isSelezioneCollapsed = false; }
  }

  corsocollapse() {
    if (this.isCorsoCollapsed === false) {
      this.isCorsoCollapsed = true;
    } else { this.isCorsoCollapsed = false; }
  }

  staffcollapse() {
    if (this.isStaffCollapsed === false) {
      this.isStaffCollapsed = true;
    } else { this.isStaffCollapsed = false; }
  }

  accountcollapse() {
    if (this.isAccountCollapsed === false) {
      this.isAccountCollapsed = true;
    } else { this.isAccountCollapsed = false; }
  }
}
