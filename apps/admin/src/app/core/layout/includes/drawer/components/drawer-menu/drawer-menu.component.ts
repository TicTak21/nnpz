import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'admin-drawer-menu',
  templateUrl: './drawer-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerMenuComponent {
  navigation = [
    { label: 'Home', icon: 'home', href: '/' },
    { label: 'Profile', icon: 'person', href: '/me' },
    { label: 'Sales', icon: 'request_quote', href: '/sales' },
    { label: 'Report', icon: 'summarize', href: '/report' },
    { label: 'Support', icon: 'support_agent', href: '/support' },
    {
      label: 'Notifications',
      icon: 'notifications',
      href: '/notifications',
    },
    { label: 'Settings', icon: 'settings', href: '/settings' },
  ];
}
