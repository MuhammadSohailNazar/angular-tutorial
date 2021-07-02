import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template: ` <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">{{ pageTitle }}</a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" [routerLink]="['welcome']">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['products']">Product List</a>
            </li>
            <li class="nav-item">
              <a class="nav-link">Pricing</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>`,
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
