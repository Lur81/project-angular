import { IProduct } from './../../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get("http://localhost:3000/products")
  }

  postProducts(newProduct: IProduct) {
    this.http.post("http://localhost:3000/products", newProduct).subscribe()
  }

  getProductsById(id: number) {
    return this.http.get(`http://localhost:3000/products/${id}`)
  }

  putProducts(newProduct: IProduct) {
    this.http.put(`http://localhost:3000/products/${newProduct.id}`, newProduct).subscribe()
  }

  deleteProducts(id: number) {
    this.http.delete(`http://localhost:3000/products/${id}`).subscribe()
  }

}
