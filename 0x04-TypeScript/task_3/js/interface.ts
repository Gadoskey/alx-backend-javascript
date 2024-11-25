// build an interface and a type
export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;  // optional field
}
