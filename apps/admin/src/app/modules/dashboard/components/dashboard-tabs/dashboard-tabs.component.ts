import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-dashboard-tabs',
  templateUrl: './dashboard-tabs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardTabsComponent {
  config = {
    toolbar: [
      [
        'bold',
        'italic',
        'underline',
        'strike',
        { list: 'ordered' },
        { list: 'bullet' },
        { header: [1, 2, 3, 4, 5, 6, false] },
        { color: [] },
        { background: [] },
        'link',
        'image',
        'video',
        'clean',
      ],
    ],
  };
}
