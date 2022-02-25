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

  fullname: string;
  auth: any;
  ngOnInit(): void {
    this.auth = localStorage.getItem('user');
    console.log(this.auth);
    if(this.auth) {
       this.fullname = localStorage.getItem('user');
     }
  }

  search(){
    searchBtn();
  }
  cart(){
    cartBtn();
  }
  
}
