import { IProduct } from './../../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(environment.url + 'products')
  }

  postProducts(newProduct: IProduct) {
    this.http.post(environment.url + 'products', newProduct).subscribe()
  }

  getProductsById(id: number) {
    return this.http.get(environment.url + 'products/' + id)
  }

  putProducts(newProduct: IProduct) {
    this.http.put(environment.url + 'products/' + newProduct.id, newProduct).subscribe()
  }

  deleteProducts(id: number) {
    this.http.delete(environment.url + 'products/' + id).subscribe()
  }

}
