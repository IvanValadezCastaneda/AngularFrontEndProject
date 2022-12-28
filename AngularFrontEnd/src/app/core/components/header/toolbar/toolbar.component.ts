// ToolbarComponent.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavService } from 'src/app/services/ShowSideNav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',

})

export class ToolbarComponent {

  constructor(private navService: NavService) { }

  darkMode: boolean = false;
  showSideNav: boolean | undefined;

  // Initialize showSideNav to the value of currentShowSideNav
  ngOnInit() {
    this.navService.currentShowSideNav.subscribe(show => {
      this.showSideNav = show;
    });
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    document.body.classList.toggle('Toolbar-Darkmode', this.darkMode);
  }

  onMenuButtonClick() {
    // Toggle the value of showSideNav
    this.showSideNav = !this.showSideNav;
    this.navService.changeShowSideNav(this.showSideNav);
  }

}

