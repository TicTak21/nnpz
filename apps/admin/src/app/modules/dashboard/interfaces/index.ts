import { ComponentType } from '@angular/cdk/portal';
import { InputsType, OutputsType } from 'ng-dynamic-component';
import { ELayoutType } from '../../../core/layout/enums';

export interface ILayoutItem {
  component: ComponentType<unknown>;
  col: string | number;
  inputs: InputsType;
  outputs: OutputsType;
}

export type TLayoutConfig = {
  [key in ELayoutType]: ILayoutItem[];
};
