import { Component, OnInit } from '@angular/core';

declare const searchBtn: any;
declare const cartBtn: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    searchBtn();
  }
  cart(){
    cartBtn();
  }
  
}
