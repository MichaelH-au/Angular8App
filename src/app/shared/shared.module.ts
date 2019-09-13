import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ScrollableTabComponent} from "./components/scrollable-tab";
import {ImageSliderComponent} from "./components/image-slider";
import {HorizontalGridComponent} from "./components/horizontal-grid";


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    HorizontalGridComponent
  ]
})
export class SharedModule { }
