import { RouterModule, Routes } from "@angular/router";
import {HomeContainerComponent, HomeDetailComponent} from "./home";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
