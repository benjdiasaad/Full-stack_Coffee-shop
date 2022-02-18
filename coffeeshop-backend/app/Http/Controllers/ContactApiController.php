<?php

namespace App\Http\Controllers;
use App\Models\Contact;

use Illuminate\Http\Request;

class ContactApiController extends Controller
{
    public function index(){
        return Contact::orderBy('id','desc')->get();
    }

    public function store(){
        request()->validate([
            'name' => 'required',
            'email' => 'required',
            'telephone' => 'required'
        ]);

       return Contact::create([
           'name' => request('name'),
           'email' => request('email'),
           'telephone' => request('telephone')
       ]);
    }

    public function update(Contact $contact){

        request()->validate([
            'name' => 'required',
            'email' => 'required',
            'telephone' => 'required'
        ]);

        $success = $contact->update([
           'name' => request('name'),
           'email' => request('email'),
           'telephone' => request('telephone')
        ]);

        return [
            'success'=> $success
        ];
    }

    public function delete(Contact $contact){
        $success = $contact->delete();
        return [
         'success' => $success
        ];
    }
}
