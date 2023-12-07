import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tabName: string = 'list';
  constructor() { }

  ngOnInit(): void {
  }
  changeTab(value: string){
    this.tabName = value;
  }
}
