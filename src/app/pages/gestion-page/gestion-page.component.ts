import { IProduct } from 'src/app/models/product.interface';
import { ProductsService } from './../../shared/services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gestion-page',
  templateUrl: './gestion-page.component.html',
  styleUrls: ['./gestion-page.component.scss']
})
export class GestionPageComponent {
 

  newProduct: IProduct = {
    id: 0,
    name: "",
    price: 0,
    description: "",
    stars: 0,
    image: "",
  }

  constructor (private productsService: ProductsService){}
  
  crearProducto(){
    console.log(this.newProduct)
    this.productsService.postProducts(this.newProduct)
    alert ("Producto creado")
    this.newProduct = {
      id: 0,
      name: "",
      price: 0,
      description: "",
      stars: 0,
      image: "",
    }

 }
} 