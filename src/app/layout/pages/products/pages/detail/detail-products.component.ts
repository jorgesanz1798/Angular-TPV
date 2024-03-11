import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';

@Component({
  standalone: true,
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.css'],
  imports: [HttpClientModule, CommonModule, MaterialModule],
  providers: [{provide: ProductService, useClass: ProductService}]

})
export class DetailProductsComponent implements OnInit{

  displayedColumns: string[] = ['id', 'title', 'precio'];
  dataSource: any[] = [];
  title: string;

  constructor(
    private _location: Location,
    private service: ProductService,
    private router: Router
  ) {
    let product = this.router.url.split('/')[3]
    this.title = product;
    this.service.getProducts(product).subscribe(products => {
      this.dataSource = products;
    })
  }

  ngOnInit(): void {
  }

  backPage() {
    this._location.back();
  }
}
