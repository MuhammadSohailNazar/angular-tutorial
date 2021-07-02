import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImages: boolean = false;
  _listFilter: string = '';
  errorMessage: string;
  get listFilter() {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter
      ? this.performFilter(this._listFilter)
      : this.products;
  }

  products: IProduct[];
  filteredProducts: IProduct[];

  constructor(private _productService: ProductService) {}
  ngOnInit(): void {
    this._productService.getProducts().subscribe(
      (products) => {
        this.products = products;
        this.filteredProducts = this.products;
        },
      (error) => (this.errorMessage = <any>error)
    );
  }

  toggleImages(): void {
    this.showImages = !this.showImages;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Product List ' + message;
  }
}
