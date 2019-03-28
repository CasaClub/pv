import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductModel } from './product.model';
import { ProductActions, ProductActionTypes } from './product.actions';

const adapter: EntityAdapter<ProductModel> = createEntityAdapter<ProductModel>();

export interface ProductState extends EntityState<ProductModel> {
  selectedId: string;
}

const initialState: ProductState = adapter.getInitialState({
    selectedId: null,
});

export function productReducer(
  state = initialState,
  action: ProductActions,
): ProductState {
  switch (action.type) {
    case ProductActionTypes.AddProductCompleted: {
      return adapter.addOne(action.payload, state);
    }

    default: {
      return state;
    }
  }
}

const selectFeature = createFeatureSelector<ProductState>(
  'products',
);
const { selectAll } = adapter.getSelectors(selectFeature);