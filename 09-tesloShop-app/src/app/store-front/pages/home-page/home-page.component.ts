import { Component, inject, resource } from '@angular/core';
import { ProductCardComponent } from '@products//components/product-card/product-card.component';
import { ProductService } from '@products//services/Product.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  private productsService = inject(ProductService);

  productsResource = rxResource( {
    request: () => ({}),
    loader: ({request}) => {
      return this.productsService.getProducts();
    }
  })



}
