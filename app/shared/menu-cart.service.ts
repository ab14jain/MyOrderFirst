import { Injectable } from '@angular/core';

@Injectable()

export class MenuCartService {

  myCart: any[] = [];

  getCart () {
    return Promise.resolve(this.myCart);
  }

  addProduct(id: string, name: string, price: number) {
    this.myCart.push({'id': id, 'name': name, 'price': price});
    alert(`${name} added to cart`);
  }

  removeCart(searchId: string) {
    let tmp = this.myCart.map(x => x.id).indexOf(searchId);

    if (tmp > -1) {
      this.myCart.splice(tmp, 1);
    }
  }
}
