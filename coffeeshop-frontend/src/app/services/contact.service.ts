import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from '../classes/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiURL = "http://127.0.0.1:8000/api/contact";
  constructor(private http:HttpClient) { }

  persist(contact: Contact){
    return this.http.post<Contact>(this.apiURL, contact);
  }
}
