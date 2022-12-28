import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  private showSideNavSource = new BehaviorSubject(false);
  currentShowSideNav = this.showSideNavSource.asObservable();

  constructor() { }

  changeShowSideNav(show: boolean) {
    this.showSideNavSource.next(show);
  }
}
