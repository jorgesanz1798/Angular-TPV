import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/enviroments/enviroment';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categories`);
  }

  getProducts(categoria: string): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.baseUrl}/${categoria}`);
  }

  getProduct(id: string): Observable<Products> {
    return this.http.get<Products>(`${this.baseUrl}/${id}`);
  }

  addProduct(product: Products): Observable<Products> {
    return this.http.post<Products>(`${this.baseUrl}`, product);
  }

  updateProduct(id: string, product: Products): Observable<Products> {
    return this.http.put<Products>(`${this.baseUrl}/${id}`, product);

  }

  deleteProduct(id: string): Observable<Products> {
    return this.http.delete<Products>(`${this.baseUrl}/${id}`);
  }
}

