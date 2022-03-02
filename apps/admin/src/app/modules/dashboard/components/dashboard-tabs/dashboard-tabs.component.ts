import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'admin-dashboard-tabs',
  templateUrl: './dashboard-tabs.component.html',
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardTabsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
