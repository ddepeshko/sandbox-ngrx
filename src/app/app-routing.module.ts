import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/domains/home-page/home-page.module')
      .then((m) => m.HomePageModule),
  },
  {
    path: 'add-product',
    loadChildren: () => import('./modules/domains/product-add-page/product-add-page.module')
      .then((m) => m.ProductAddPageModule),
  },
  {
    path: 'product-list/edit/:id',
    loadChildren: () => import('./modules/domains/product-add-page/product-add-page.module')
      .then((m) => m.ProductAddPageModule),
  },
  {
    path: 'product-list',
    loadChildren: () => import('./modules/domains/products-list-page/products-list-page.module')
      .then((m) => m.ProductsListPageModule),
  },
  {
    path: 'product-list/:id',
    loadChildren: () => import('./modules/domains/product-view-page/product-view-page.module')
      .then((m) => m.ProductViewPageModule),
  },
  {
    path: '**',
    loadChildren: () => import('./modules/domains/not-found-page/not-found-page.module')
      .then((m) => m.NotFoundPageModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
