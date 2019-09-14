import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ScrollableTabComponent} from "./components/scrollable-tab";
import {ImageSliderComponent} from "./components/image-slider";
import {HorizontalGridComponent} from "./components/horizontal-grid";
import {GridItemDirective, GridItemImageDirective, GridItemTitleDirective} from "./directives";


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    GridItemDirective,
    HorizontalGridComponent,
    GridItemImageDirective,
    GridItemTitleDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabComponent,
    ImageSliderComponent,
    GridItemDirective,
    GridItemImageDirective,
    GridItemTitleDirective,
    HorizontalGridComponent
  ]
})
export class SharedModule { }
