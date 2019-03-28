import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { ProductModel } from '../models';

@Injectable()
export class ProductAPIService {
  createEntity(product: ProductModel): any {
    return this.http.post(
      `${environment.apiUrl}/api/v1/products`,
      product,
    );
  }

  updateEntity(product: ProductModel): any {
    return this.http.patch(
      `${environment.apiUrl}/api/v1/products/${
        product.id
      }`,
      product,
    );
  }

  fetchMyCalification(): any {
    return this.http.get(
      `${environment.apiUrl}/api/v1/products`,
    );
  }

  constructor(private http: HttpClient) {}
}
