import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IDashboardEntity } from '@nnpz/types';

@Component({
  selector: 'admin-entity-page',
  templateUrl: './entity-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntityPageComponent {
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

  onDrop(event: CdkDragDrop<IDashboardEntity[]>) {
    moveItemInArray(
      this.MOCK_DATA.entities,
      event.previousIndex,
      event.currentIndex,
    );
  }
}