import {NgModule} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  exports: [
      MatButtonModule,
      MatDatepickerModule,
      MatIconModule,
      MatInputModule,
      MatNativeDateModule,
      MatRippleModule,
      MatTableModule,
      MatFormFieldModule
  ]
})
export class CommonMaterialModule {}