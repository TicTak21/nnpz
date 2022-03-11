import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectUrl } from '@nnpz/admin/app/core/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'admin-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(500)]),
    ]),
  ],
})
export class DrawerMenuComponent {
  navigation = [
    { label: 'Dashboard', icon: 'dashboard', href: '/dashboard' },
    { label: 'Profile', icon: 'person', href: '/me' },
    { label: 'Sales', icon: 'leaderboard', href: '/sales' },
    { label: 'Entities', icon: 'data_object', href: '/entities' },
    { label: 'Report', icon: 'summarize', href: '/report' },
    { label: 'Support', icon: 'support_agent', href: '/support' },
    {
      label: 'Notifications',
      icon: 'notifications',
      href: '/notifications',
    },
    { label: 'Settings', icon: 'settings', href: '/settings' },
  ];
  url$: Observable<string> = new Observable<string>();

  constructor(private readonly store: Store) {
    this.url$ = this.store.select(selectUrl);
  }
}
