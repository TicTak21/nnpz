import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IDashboardEntity } from '@nnpz/shared/util';

@Component({
  selector: 'admin-feature-entities-page',
  templateUrl: './entities-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminFeatureEntitiesPageComponent {
  MOCK_DATA = {
    entities: [
      {
        name: 'users',
        count: 25,
      },
      {
        name: 'orders',
        count: 201,
      },
      {
        name: 'pizzas',
        count: 13,
      },
      {
        name: 'toppings',
        count: 42,
      },
      {
        name: 'locations',
        count: 21,
      },
    ],
  };

  handleDrop(event: CdkDragDrop<IDashboardEntity[]>) {
    moveItemInArray(
      this.MOCK_DATA.entities,
      event.previousIndex,
      event.currentIndex,
    );
  }
}
