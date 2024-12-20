//  an ambient file containing the type declarations for each crud function. 
import { RowID, RowElement } from './interface';

export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
