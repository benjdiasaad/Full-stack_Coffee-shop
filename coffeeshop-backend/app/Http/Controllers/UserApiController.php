<?php

namespace App\Http\Controllers;
use App\Models\User;

use Illuminate\Http\Request;

class UserApiController extends Controller
{
    public function index(){
        return User::all();
    }

    public function store(){
        request()->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);

       return User::create([
           'name' => request('name'),
           'email' => request('email'),
           'password' => request('password')
       ]);
    }

    public function update(User $user) {

        request()->validate([
            'name' => 'required',
            'email' => 'required',
            'password' => 'required'
        ]);

        $success = $user->update([
           'name' => request('name'),
           'email' => request('email'),
           'password' => request('password')
        ]);

        return [
            'success'=> $success
        ];
    }

    public function delete(User $user){
        $success = $user->delete();
        return [
         'success' => $success
        ];
    }
}

