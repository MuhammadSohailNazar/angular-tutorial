import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;
  imageWidth: number = 200;
  imageMargin: number = 2;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  ngOnInit(): void {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this._productService.getProduct(id).subscribe(
      (p) => {
        this.product = p;
        console.log('product ', p);
      },
      (error) => (this.errorMessage = <any>error)
    );
  }

  goBack(): void {
    this._router.navigate(['/products']);
  }
}
