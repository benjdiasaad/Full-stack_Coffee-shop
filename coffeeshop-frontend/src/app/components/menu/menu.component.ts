import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

declare const searchBtn: any;
declare const cartBtn: any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private productService: ProductService,public router: Router) { }
  
  filteredString: string= '';
  totalLength: any;
  page:number;

  fullname: string;
  auth: any;
  ngOnInit(): void {
    this.listProducts();
    this.auth = localStorage.getItem('user');
    console.log(this.auth);
    if(this.auth) {
       this.fullname = localStorage.getItem('user');
     }
  }

  products: Product[];
  search(){
    searchBtn();
  }
  cart(){
    cartBtn();
  }
  listProducts(){
    this.productService.getProducts().subscribe(data =>{
        this.products = data;
        this.totalLength = data.length;
        this.page = data.length / 6;
        console.log(this.page);
    })
  }


}
