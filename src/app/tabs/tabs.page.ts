import { Component } from '@angular/core';
import { TabService } from '../services/tab.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public tabService: TabService) {}

  isActive(url: string): boolean {
    return this.tabService.isActive(url);
  }

}
