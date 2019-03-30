import { NgModule } from '@angular/core';

import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-rounting';

@NgModule({
  imports: [
    SharedModule,
    ProductRoutingModule,
  ],
  exports: [],
  declarations: [ProductComponent],
})
export class ProductModule {}
