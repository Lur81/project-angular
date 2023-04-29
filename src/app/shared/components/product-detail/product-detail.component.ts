import { ProductsService } from './../../services/products.service';
import { Component, Input } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';



@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() style!: boolean;
  @Input() product!: IProduct; 
 

  constructor (private productsService: ProductsService){
  }
  delete(id:number){
    confirm("¿Eliminar este producto?")? this.productsService.deleteProducts(id): null;
    location.reload();
  }

}
