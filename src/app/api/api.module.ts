import { NgModule } from '@angular/core';

import { PROVIDERS } from './services';
@NgModule({
  providers: [...PROVIDERS],
})
export class ApiModule {}
