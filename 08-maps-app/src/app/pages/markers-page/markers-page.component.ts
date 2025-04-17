import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { DecimalPipe, JsonPipe } from '@angular/common';


mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-markers-page',
  imports: [],
  templateUrl: './markers-page.component.html',
})
export class MarkersPageComponent implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map|null>(null);

  async ngAfterViewInit() {
    if ( !this.divElement()) return;
    await new Promise((resolve) => setTimeout(resolve, 80));
    const element = this.divElement()?.nativeElement;
    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-16.60, 28.26], // starting position [lng, lat]
      zoom: 15, // starting zoom
    });

    const marker = new mapboxgl.Marker({
      draggable: false,
      color: 'red',
    }).setLngLat([-16.60, 28.26]).addTo(map);


    this.mapListeners(map);
  }

  mapListeners(map:mapboxgl.Map) {
    console.log('object');
  }

}
