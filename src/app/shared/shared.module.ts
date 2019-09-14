import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ScrollableTabComponent} from "./components/scrollable-tab";
import {ImageSliderComponent} from "./components/image-slider";
import {HorizontalGridComponent} from "./components/horizontal-grid";
import {GridItemDirective} from "./directives";
import { GridItemImage } from './directives/grid-item-image.directive.directive';
import { GridItemTitle } from './directives/grid-item-title.directive.directive';


@NgModule({
  declarations: [
    ScrollableTabComponent,
    ImageSliderComponent,
    GridItemDirective,
    HorizontalGridComponent,
    GridItemImage.DirectiveDirective,
    GridItemTitle.DirectiveDirective],
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
    HorizontalGridComponent
  ]
})
export class SharedModule { }
