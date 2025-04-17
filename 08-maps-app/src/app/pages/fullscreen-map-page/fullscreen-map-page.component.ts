import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';


mapboxgl.accessToken = environment.mapboxKey;


@Component({
  selector: 'app-fullscreen-map-page',
  imports: [],
  templateUrl: './fullscreen-map-page.component.html',
  styleUrl: './fullscreen-map-page.component.css',
})
export class FullscreenMapPageComponent implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');

  async ngAfterViewInit() {
    if ( !this.divElement()) return;
    await new Promise((resolve) => setTimeout(resolve, 80));
    const element = this.divElement()?.nativeElement;
    console.log(element);
    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-16.605555555556, 28.268611111111], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }





}
