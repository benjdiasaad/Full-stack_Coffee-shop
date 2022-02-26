import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private productService: ProductService) { }
 
  products: Product[];
  
  ngOnInit(): void {
    this.listProducts();
  }

  listProducts(){
    this.productService.getProducts().subscribe(data =>{
        this.products = data;
        console.log(this.products);
    })
  }


}
