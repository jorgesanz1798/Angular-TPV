import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/pages/list/products.component';
import { TablesComponent } from './pages/tables/tables.component';
import { HomeComponent } from './pages/home/home.component';
import { DetailProductsComponent } from './pages/products/pages/detail/detail-products.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'product/:productName',
        component: DetailProductsComponent
      },
      {
        path: 'tables',
        component: TablesComponent
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class ComponentsRoutingModule { }