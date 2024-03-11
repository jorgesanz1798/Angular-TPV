import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsRoutingModule } from './layout/components.routing';
import { CategoryCardComponent } from './layout/components/category-card/category-card.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ComponentsRoutingModule,
    CategoryCardComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
