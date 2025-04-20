import { ActivatedRoute } from '@angular/router';
import { Component, inject, resource } from '@angular/core';
import { ProductCardComponent } from '@products//components/product-card/product-card.component';
import { ProductService } from '@products//services/Product.service';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { map } from 'rxjs';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, PaginationComponent],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {

  private productsService = inject(ProductService);
  private activatedRoute =  inject(ActivatedRoute);

  currentPage = toSignal( this.activatedRoute.queryParamMap.pipe(
    map( params => (params.get('page') ? +params.get('page')! : 1)),
    map( page => (isNaN(page) ? 1 : page))
  ), {
    initialValue: 1
  })

  productsResource = rxResource( {
    request: () => ({page: this.currentPage() - 1}),
    loader: ({request}) => {
      return this.productsService.getProducts({
        offset: request.page * 9
      });
    }
  });

}
