import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, filter, find, first, map, tap } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable()
export class ProductService {
  private productUrl = './api/products/products.json';

  constructor(private _http: HttpClient) {}
  getProducts(): Observable<IProduct[]> {
    return this._http.get<IProduct[]>(this.productUrl).pipe(
      tap((data) => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  getProduct(id: number): Observable<IProduct> {
    return this.getProducts().pipe(
      map((res) => res.find((x) => x.productId == id))
    );
  }
  handleError(err: HttpErrorResponse) {
    console.log('message:', err);
    return throwError(err);
  }
}
