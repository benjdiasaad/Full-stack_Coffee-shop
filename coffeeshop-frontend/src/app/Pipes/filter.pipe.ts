import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../classes/product';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(products: Product[], filteredString: string): Product[] {
    if(!products || !filteredString){
      return products;
    }

    return products.filter(product => 
          product.libelle.toLowerCase().indexOf(filteredString.toLowerCase()) !== -1);
    
  }

}
