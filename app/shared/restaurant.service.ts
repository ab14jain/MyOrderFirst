import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Headers} from '@angular/http';

@Injectable()
export class RestaurantService {

  // header: HttpHeaders = "Accept: application/json" --header "user-key: 5dfc1c76e7dcc7791a46c279b098c339"
  // headers: HttpHeaders = new HttpHeaders({ 'Accept': 'application/json',  'user-key': '5dfc1c76e7dcc7791a46c279b098c339'});
  // https://api-v3.mojepanstwo.pl/dane/wojewodztwa
  // https://developers.zomato.com/api/v2.1/categories

  result: any[] = [];
  constructor(private http: HttpClient) { }

  getData() {

    return  new Promise<any>((resolve, reject)  => {
      this.http.get('https://api-v3.mojepanstwo.pl/dane/wojewodztwa')
      .subscribe(data => {
          resolve(data['Dataobject']);
      }, function(error){
          alert(`${error.message} error occured. Please try again!`);
      });
    });
  }
}
