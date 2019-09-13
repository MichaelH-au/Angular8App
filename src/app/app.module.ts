import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ScrollableTabComponent } from './shared/components';
import { ImageSliderComponent } from './shared/components/image-slider/image-slider.component';
import { HorizontalGridComponent } from './shared/components/horizontal-grid/horizontal-grid.component';
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
