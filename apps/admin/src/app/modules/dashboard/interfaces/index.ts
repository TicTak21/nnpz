import { ComponentType } from '@angular/cdk/portal';
import { ELayoutType } from '@nnpz/admin/util-layout';
import { InputsType, OutputsType } from 'ng-dynamic-component';

export interface ILayoutItem {
  component: ComponentType<unknown>;
  col: string | number;
  inputs: InputsType;
  outputs: OutputsType;
}

export type TLayoutConfig = {
  [key in ELayoutType]: ILayoutItem[];
};
