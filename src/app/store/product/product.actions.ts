import { Action } from '@ngrx/store';
import { ProductModel } from 'src/app/api';

export enum ProductActionTypes {
  AddProduct = '[Product] Add Product',
  AddProductCompleted = '[Product] Add Product Complete',
}

export class AddProduct implements Action {
  readonly type = ProductActionTypes.AddProduct;

  constructor(public payload: ProductModel){}
}

export class AddProductComplete implements Action {
    readonly type = ProductActionTypes.AddProductCompleted;

    constructor(public payload: ProductModel){}
}

export type ProductActions =
  | AddProduct 
  | AddProductComplete;
