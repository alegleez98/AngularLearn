import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';
import mapboxgl, { MapMouseEvent, LngLatLike } from 'mapbox-gl';
import { Marker } from '../../../shared/interfaces/Marker';
import { v4 as uuid } from 'uuid';
import { environment } from '../../../../environments/environment';

mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-minimap',
  imports: [],
  templateUrl: './minimap.component.html',
  styleUrl: './minimap.component.css'
})
export class MinimapComponent implements AfterViewInit {

  coords = input.required<LngLatLike>();

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map|null>(null);

  markers = signal<Marker[]>([]);

  async ngAfterViewInit() {
    if ( !this.divElement()) return;
    await new Promise((resolve) => setTimeout(resolve, 80));
    const element = this.divElement()?.nativeElement;
    console.log(element);
    const map = new mapboxgl.Map({
      container: element, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.coords(), // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false
    });
    console.log()
    this.mapAddMarker(map);
  }

  mapAddMarker(map:mapboxgl.Map): void {
    if ( !map) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const marker = new mapboxgl.Marker({
      draggable: false,
      color: color,
    }).setLngLat(this.coords()).addTo(map);
    this.map.set(map);
  }

}

