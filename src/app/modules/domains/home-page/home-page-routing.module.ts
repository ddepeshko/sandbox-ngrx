import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './home-page.component';

const routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomePageRoutingModule {
}
