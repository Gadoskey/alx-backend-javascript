/**
 * @file main.ts
 * @description This file demonstrates the use of TypeScript interfaces and a CRUD library
    to perform basic database operations such as inserting, updating, and
    deleting rows. The CRUD operations are defined in an external library
    called 'crud.js', and the TypeScript ambient file defines the function types.
 * @date 2024-10-12
 */

// a triple slash directive that includes all the dependencies from crud.d.ts
/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Create a row object of type RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
};

// Insert the row and get the row ID
const newRowID: RowID = CRUD.insertRow(row);

// Create an updated row with an age field
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23
};

// Update the row with the new data
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by its ID
CRUD.deleteRow(newRowID);
