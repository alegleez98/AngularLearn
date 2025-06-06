import { SlicePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from '@products//interfaces/product.interface';
import { ProductImagePipe } from '@products//pipes/productImage.pipe';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe, ProductImagePipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  product = input.required<Product>();

}
