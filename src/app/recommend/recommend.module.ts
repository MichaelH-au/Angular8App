import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecommendRoutingModule } from './recommend-routing.module';
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    RecommendRoutingModule,
    SharedModule
  ]
})
export class RecommendModule { }
