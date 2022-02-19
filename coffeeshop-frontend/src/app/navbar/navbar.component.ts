import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const searchBtn: any;
declare const cartBtn: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  search(){
    searchBtn();
  }
  cart(){
    cartBtn();
  }
  
}
