export interface IEntityFieldConfig<InitialValue = unknown> {
  name: string;
  initialValue: string | number | InitialValue;
  required: boolean;
}
