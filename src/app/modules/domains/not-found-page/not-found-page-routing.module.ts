import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {NotFoundPageComponent} from './not-found-page.component';


const routes = [
  {
    path: '',
    component: NotFoundPageComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class NotFoundPageRoutingModule {
}
