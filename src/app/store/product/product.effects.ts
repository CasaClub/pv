import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { concatMap, catchError, map } from 'rxjs/operators';

import { ProductActionTypes, AddProduct, AddProductComplete } from './product.actions';
import { ProductAPIService, ProductModel } from 'src/app/api';
import { of } from 'rxjs';

@Injectable()
export class ProductEffects {
  @Effect()
  addProduct$ = this.actions$.pipe(
    ofType(ProductActionTypes.AddProduct),
    concatMap((action: AddProduct) => {
      return this.productAPIService.createEntity(action.payload).pipe(
        map(
          (response: ProductModel) =>
            new AddProductComplete(response),
        ),
        catchError(() =>
          of(),
        ),
      );
    }),
  );

  constructor(
    private actions$: Actions,
    private productAPIService: ProductAPIService,
  ) {}
}
