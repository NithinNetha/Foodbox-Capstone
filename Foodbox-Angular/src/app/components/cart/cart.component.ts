import { Cart } from './../../model/cart';
import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public cart:Cart=new Cart();
  public products:Cart[];
  public grandTotal : number = 0;
  constructor(private cartService:CartService, private router:Router) {
    this.products=[];
   }

  ngOnInit(): void {
    if(sessionStorage.getItem('cust_email')==null){
      this.router.navigate(['/products']);
    }
    this.getCartItemList();
  }

  private getCartItemList(){
    this.cartService.getCartItemList().subscribe((res:Cart[])=>{
      this.products=res;
      console.log('length'+this.products.length );
      this.grandTotal=0;
      for(let i=0;i<this.products.length;i++)
      { 
        this.grandTotal+=this.products[i].price;
      }
    });
  }

  deleteItem(id:any){
    console.log('id '+id)
    this.cartService.deleteItem(id).subscribe(res=>{
      this.getCartItemList();
    })
  }

  removeAllCart(){
    this.cartService.deleteAllCart().subscribe(res=>{
      this.getCartItemList();
    })
  }

  addOneCart(id:any,cart:Cart){
    this.cartService.addOneCart(id,cart).subscribe(res=>{
      this.getCartItemList();
    })
  }

  lessOneCart(id:any,cart:Cart){
    this.cartService.lessOneCart(id,cart).subscribe(res=>{
      this.getCartItemList();
    })
  }
}