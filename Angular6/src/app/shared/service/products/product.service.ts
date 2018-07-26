import { Injectable } from '@angular/core';
import { IProduct } from './product.model';


import { RestService } from '../../../shared/rest.service';
import { environment } from '../../../../environments/environment';

@Injectable()
export class ProductService {

  products: IProduct[] = [
    {
      productCode: 'vikask1',
      name: 'vikask Assessment',
      description: 'vikask is an WEBSITE.',
      unitPrice: 10.00,
      details: '<div>Lorem ipsum <strong>dolor</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>',
      logoPath: './assets/productLogos/vikask-logo.png',
    },
    {
      productCode: 'vikask2',
      name: 'vikask Assessment',
      description: 'vikask is an WEBSITE.',
      unitPrice: 10.00,
      details: '<div>Lorem ipsum <strong>dolor</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </div>',
      logoPath: './assets/productLogos/Logo.png',
    }
  ];

  constructor(private restService: RestService) { }

  getProductsDetails() {
    const headers = this.restService.setHeaders([
      {
        key: 'Content-Type',
        value: 'application/json'
      }
    ]);
    const url = 'getProductsDetails/attributeGroupId=50019';

    return this.restService.get(url, headers);
  }

  getProducts() {
    return this.products;
  }
  getProductsList() {
    const headers = this.restService.setHeaders([
      {
        key: 'Content-Type',
        value: 'application/json'
      }
    ]);
    // const url = 'attributeGroupName=Order%20Management%20Products&attributeGroupId=50019';
    const url = 'getProductsList';
    return this.restService.get(url, headers)
      .pipe(
        (data: any) => {
          return data.filter(productList => {
            if (productList.attribute.key === 'Product List') {
              return productList.value;
            }
          });
        }
      );

  }
}
