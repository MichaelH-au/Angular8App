import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeContainerComponent, HomeDetailComponent } from './components';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [HomeContainerComponent, HomeDetailComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
  ],
})
export class HomeModule { }
