import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ProductsComponent } from './pages/products/pages/list/products.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HomeComponent } from './pages/home/home.component';
import { TablesComponent } from './pages/tables/tables.component';
import { ComponentsRoutingModule } from './components.routing';
import { HttpClientModule } from '@angular/common/http';
import { DetailProductsComponent } from './pages/products/pages/detail/detail-products.component';

@NgModule({
  declarations: [
    HomeComponent,
    TablesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    ProductsComponent,
    ComponentsRoutingModule,
    HttpClientModule,
    DetailProductsComponent
  ]
})

export class ComponentsModule { }
