import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PadStartPipe } from './pipes/pad-start/pad-start.pipe';



@NgModule({
  declarations: [PadStartPipe],
  imports: [
    CommonModule
  ],
  exports: [PadStartPipe]
})
export class SharedModule { }
