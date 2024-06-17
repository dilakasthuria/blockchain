import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-supply-chain',
  templateUrl: './supply-chain.component.html'
})
export class SupplyChainComponent {
  constructor(private http: HttpClient) {}

  addProduct(name: string, manufacturer: string) {
    this.http.post('/api/supplyChain/addProduct', { name, manufacturer })
      .subscribe(response => console.log(response));
  }
}
