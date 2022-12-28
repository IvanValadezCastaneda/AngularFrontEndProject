// AppComponent.ts
import { Component, OnInit } from '@angular/core';
import { NavService } from './services/ShowSideNav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(private navService: NavService) { }
  showSideNav: boolean | undefined;
  title = 'AngularFrontEnd';

  ngOnInit() {
    this.navService.currentShowSideNav.subscribe(show => {
      this.showSideNav = show;
    });
  }
}
