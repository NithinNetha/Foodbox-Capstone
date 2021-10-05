import { ProductService } from './../../service/product.service';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  login:number=0;
  products:Product[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProductList().subscribe(data=>{
      this.products=data;
    })
  }
}
