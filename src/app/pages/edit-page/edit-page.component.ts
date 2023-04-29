import { ProductsService } from 'src/app/shared/services/products.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss']
})
export class EditPageComponent implements OnInit{

  newProduct: IProduct = {
    id: 0,
    name: "",
    price: 0,
    description: "",
    stars: 0,
    image: '',
  }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.productsService.getProductsById(id).subscribe((res:any)=>{
        this.newProduct = res;
      })
    });  
  }

  constructor (private productsService: ProductsService, private route:ActivatedRoute){}
  editarProducto(){
    this.productsService.putProducts(this.newProduct)
    alert ("Producto modificado")
    console.log(this.newProduct)
 }
}
