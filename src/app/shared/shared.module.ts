import { CommonModule as AngularCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule,
  MatInputModule,
  MatDialogModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  MatAutocompleteModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatSidenavModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule,
  MatTableModule,
  MatSlideToggleModule,
  MatMenuModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,

} from '@angular/material';
import { RouterModule } from '@angular/router';

import { COMPONENTS, ENTRY_COMPONENTS } from './components';

@NgModule({
  imports: [
    AngularCommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDialogModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
  ],
  exports: [
    AngularCommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDialogModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatTableModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ...COMPONENTS,
  ],
  declarations: [...COMPONENTS],
  providers: [],
  entryComponents: [...ENTRY_COMPONENTS],
})
export class SharedModule {}
