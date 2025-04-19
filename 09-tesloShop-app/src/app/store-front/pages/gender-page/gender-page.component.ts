import { ProductService } from '@products//services/Product.service';
import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductCardComponent } from '@products//components/product-card/product-card.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-gender-page',
  imports: [ProductCardComponent],
  templateUrl: './gender-page.component.html',
})
export class GenderPageComponent {
  route = inject(ActivatedRoute);
  private _productsService = inject(ProductService);
  public get productsService() {
    return this._productsService;
  }
  public set productsService(value) {
    this._productsService = value;
  }

  gender = toSignal(this.route.params.pipe(map(({ gender }) => gender)));

  productsResource = rxResource({
    request: () => ({ gender: this.gender() }),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        gender: request.gender,
      });
    },
  });
}
