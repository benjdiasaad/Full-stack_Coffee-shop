<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Product;

class ProductApiController extends Controller
{
    public function index(){
        return Product::orderBy('id','asc')->get();
    }

    public function store(){
        request()->validate([
            'libelle' => 'required',
            'price' => 'required',
            'previousprice' => 'required',
            'image' => 'required'
        ]);

       return Product::create([
           'libelle' => request('libelle'),
           'price' => request('price'),
           'previousprice' => request('previousprice'),
           'image' => request('image')
       ]);
    }

    public function update(Product $product) {

        request()->validate([
            'libelle' => 'required',
            'price' => 'required',
            'previousprice' => 'required',
            'image' => 'required'
        ]);

        $success = $product->update([
            'libelle' => request('libelle'),
            'price' => request('price'),
            'previousprice' => request('previousprice'),
            'image' => request('image')
        ]);

        return [
            'success'=> $success
        ];
    }

    public function delete(Product $product){
        $success = $product->delete();
        return [
         'success' => $success
        ];
    }
}
