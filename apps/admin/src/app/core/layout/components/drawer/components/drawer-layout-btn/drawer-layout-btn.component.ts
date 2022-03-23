import { XPosition } from '@alyle/ui';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ILayoutTypeItem } from '@nnpz/admin/app/core/layout/interfaces';
import { Observable } from 'rxjs';
import { ELayoutType } from '../../../../enums';

@Component({
  selector: 'admin-drawer-layout-btn',
  templateUrl: './drawer-layout-btn.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DrawerLayoutBtnComponent {
  @Input() layoutType$: Observable<ELayoutType> = new Observable<ELayoutType>();

  @Output() changeLayout: EventEmitter<ILayoutTypeItem> =
    new EventEmitter<ILayoutTypeItem>();

  layouts: ILayoutTypeItem[] = [
    { type: ELayoutType.standart, icon: 'grid_view' },
    { type: ELayoutType.stats, icon: 'query_stats' },
    { type: ELayoutType.management, icon: 'view_kanban' },
  ];

  get menuXAnchor() {
    return XPosition.after;
  }

  handleClick(layout: ILayoutTypeItem) {
    this.changeLayout.emit(layout);
  }
}
