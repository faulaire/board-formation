import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule, MatProgressBarModule,
  MatSidenavModule
} from '@angular/material';

const declarations = [MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,
  MatDialogModule, MatMenuModule, MatSidenavModule, MatProgressBarModule
];

@NgModule({
  imports: [
    CommonModule,
    declarations
  ],
  exports: [
    declarations
  ]
})

export class MaterialModule {
}
