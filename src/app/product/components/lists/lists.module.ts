import { NgModule } from '@angular/core';

import { ListsRoutingModule } from './lists-rounting';
import { ListsComponent } from './lists.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    ListsRoutingModule,
    SharedModule
  ],
  exports: [],
  declarations: [ListsComponent],
})
export class ListsModule {}
