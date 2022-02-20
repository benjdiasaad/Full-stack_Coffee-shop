import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../classes/contact';
import { ContactService } from '../services/contact.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) { }
  myContact: Contact = {
    id:0,
    name: '',
    email: '',
    telephone: ''
  }

  contacts: Contact[] = [];
  ngOnInit(): void {
  }

persistContact(){
    this.contactService.persist(this.myContact).subscribe((contact) =>{
        this.contacts = [contact, ...this.contacts];
        var redirect = Swal.fire('Votre message a été bien envoyé !');
        console.log(redirect);
        this.goToHomePage();
        // console.log(this.contacts);
      })
      console.log('khrj')
}

goToHomePage(){
  this.router.navigate(['/']);
}

}
