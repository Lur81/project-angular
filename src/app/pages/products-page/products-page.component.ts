import { Component, Input, OnInit, inject } from '@angular/core';
import { IProduct } from 'src/app/models/product.interface';
import { ProductsService } from 'src/app/shared/services/products.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  
  list = true;
  grid = false;
  style!: boolean;
  http = inject (HttpClient);
  @Input () product!: IProduct;
  products: IProduct [] = [];
  searchProduct: any = "";
  searchTimeout: any;

  constructor (private productsService: ProductsService){}
  
  ngOnInit(): void{
    this.productsService.getProducts().subscribe((res:any) => {
      // console.log(res);
      this.products = res;
        
    });
  }

  searcher(){
    this.productsService.getProducts().subscribe((res:any) => {
  
      this.products = res.filter((item:any) => 
        item.name.toLowerCase().includes(this.searchProduct.toLowerCase())
      );

  });

}

  onSearch(value: string): void {
  clearTimeout(this.searchTimeout);
  this.searchTimeout = setTimeout(() => {
    this.searcher();
  }, 300);
}
  

  stylePrint(print: boolean){
    this.style = print;
  }

}
