import { Component, OnInit } from '@angular/core';
import { CategoryCardComponent } from 'src/app/layout/components/category-card/category-card.component';
import { ProductService } from '../../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
    standalone: true,
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css'],
    imports: [CategoryCardComponent, HttpClientModule, CommonModule],
    providers: [{provide: ProductService, useClass: ProductService}]
})
export class ProductsComponent implements OnInit{

    categories: any = []

    constructor(
        private service: ProductService,
    ) {
        this.service.getCategories().subscribe( categorias => {
            categorias.forEach( (categoria: string) => {
                this.categories.push(categoria)
            });
        })
    }

    ngOnInit() {
        
    }
}
