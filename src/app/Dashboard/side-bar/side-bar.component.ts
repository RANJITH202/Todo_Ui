import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { CommonServiceService } from 'src/app/Services/common-service.service';
import { constants } from 'src/app/constants';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  isSideBarOpen = false;
  isDarkMode = false;
  themeMode = 'Light Mode';
  selectedTab = constants.DASHBOARD;
  constructor(private renderer: Renderer2, private element: ElementRef, private commonService: CommonServiceService) { }

  ngOnInit(): void {
  }
  updateSidebar() {
    this.isSideBarOpen = !this.isSideBarOpen;
    this.commonService.sidebarStatus.next(this.isSideBarOpen ? constants.OPEN : constants.CLOSE);
  }
  updateTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.themeMode = this.isDarkMode ? 'Dark Mode' : 'Light Mode';
    // Get the body element
    const body = this.element.nativeElement.ownerDocument.body;
    if (this.isDarkMode) {
      this.renderer.addClass(body, 'dark');
    } else {
      this.renderer.removeClass(body, 'dark');
    }
  }
  updateSelectedTab(value: string) {
    this.selectedTab = value;
    if(value === constants.DASHBOARD){
      this.commonService.getSelectedTab.next(constants.DASHBOARD);
    } else if(value === constants.REPORT){
      this.commonService.getSelectedTab.next(constants.REPORT);
    } else if(value === constants.ANALYTICS){
      this.commonService.getSelectedTab.next(constants.ANALYTICS);
    } else if(value === constants.FAVORITES){
      this.commonService.getSelectedTab.next(constants.FAVORITES);
    } else if(value === constants.NOTIFICATIONS){
      this.commonService.getSelectedTab.next(constants.NOTIFICATIONS);
    }
  }
}
