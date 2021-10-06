import { Cart } from './../../model/cart';
import { CartService } from './../../service/cart.service';
import { Product } from './../../model/product';
import { Component, OnInit, ɵCompiler_compileModuleAndAllComponentsAsync__POST_R3__ } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  cart:Cart=new Cart();
  login:number=0;
  products:Product[];
  constructor(private productService:ProductService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.getProducts();
    this.productService.login.subscribe(res=>{
      this.login=res;
      console.log(this.login);
    })
  }

  private getProducts(){
    this.productService.getProductList().subscribe(data=>{
      this.products=data;
    })
  }

  addToCart(product:any) {
    this.cart.product=product;
    this.cartService.addToCart(this.cart).subscribe(data=>{
      console.log(data);
    });
  }

  showToLogin(){
    alert("Please login or Register to continue shopping")
  }
}
