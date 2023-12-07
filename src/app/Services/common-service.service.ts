import { Injectable } from '@angular/core';
import { constants } from '../constants';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  public sidebarStatus = new BehaviorSubject(constants.CLOSE);
  public getSelectedTab = new BehaviorSubject(constants.DASHBOARD);
  public onProjectChange= new Subject();
  public onTicketCreate= new Subject();

  constructor() { }
}
