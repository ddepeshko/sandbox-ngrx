import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header.component';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {InlineSVGModule} from 'ng-inline-svg';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [HeaderComponent],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgbDropdownModule,
    InlineSVGModule.forRoot(),
    RouterModule
  ]
})
export class HeaderModule {
}
