import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  user: User = new User();
  users : User[];
  email: string="";
  password: string="";

  ngOnInit(): void {
    
  }

  signUp(){
    if(this.user.name==null || this.user.email == null || this.user.password == null){
        Swal.fire('Please enter your informations');
    }else{
      this.userService.createUser(this.user).subscribe( data =>{
        console.log(data);
        Swal.fire('User create with success !');
        this.router.navigate(['/home']);
      },
      error => console.log(error));
    }
  }

  signIn(){
    this.userService.getUsers().subscribe(data =>{
      this.users = data;
      for(let i=0;i<data.length;i++){
        console.log(this.password);
        if(this.users[i]['email']==this.email && this.users[i]['password']==this.password){
            localStorage.setItem('user', this.users[i]['name']);
            this.router.navigate(['/home']);
        }
      }
    }, 
      err => console.log(err)
    )
  }

  onSubmit(){
    this.signUp();
  }



}
