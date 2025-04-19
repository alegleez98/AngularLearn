import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Product } from '@products//interfaces/product.interface';
import { ProductService } from '@products//services/Product.service';
import { Observable } from 'rxjs';
import { ProductCarouselComponent } from "../../components/product-carousel/product-carousel.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {

  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

  public idSlug = this.route.snapshot.paramMap.get('idSlug')!;

  productResource = rxResource( {
    request: () => ({}),
    loader: ({request}) => {
      return this.productService.getProductsByIdSlug(this.idSlug);
    }
  });




}
