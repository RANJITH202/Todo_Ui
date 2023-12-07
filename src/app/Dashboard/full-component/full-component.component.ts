import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/Services/common-service.service';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-full-component',
  templateUrl: './full-component.component.html',
  styleUrls: ['./full-component.component.scss']
})
export class FullComponentComponent implements OnInit {
  isSideBarOpen = false;
  selectedTab = constants.DASHBOARD;
  constructor(private commonService: CommonServiceService) { }

  ngOnInit(): void {
    this.commonService.getSelectedTab.subscribe((res: string) => {
      this.selectedTab = res;
    });
    this.commonService.sidebarStatus.subscribe((res: string) => {
      if (res === constants.OPEN) {
        this.isSideBarOpen = true;
      } else {
        this.isSideBarOpen = false;
      }
    });
  }

}
