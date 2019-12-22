import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product){
      return this.db.list('/products').push(product);
  }

  getAll(): AngularFireList<any[]> {
    return this.db.list('/products');
  }

  get(productId){
    return this.db.object('product/' + productId);
  }

  update(productId, product){
    return this.db.object('/product/' + productId).update(product);
  }
}
