import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';
import mapboxgl, { LngLatLike, MapMouseEvent } from 'mapbox-gl';
import { environment } from '../../../environments/environment';
import { DecimalPipe, JsonPipe } from '@angular/common';
import { v4 as UUIDV4} from 'uuid';

interface Marker {
  id: string;
  mapboxMarker: mapboxgl.Marker
}


mapboxgl.accessToken = environment.mapboxKey;

@Component({
  selector: 'app-markers-page',
  imports: [JsonPipe, DecimalPipe],
  templateUrl: './markers-page.component.html',
})
export class MarkersPageComponent implements AfterViewInit {

  divElement = viewChild<ElementRef>('map');

  map = signal<mapboxgl.Map|null>(null);

  markers = signal<Marker[]>([]);

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

    /*const marker = new mapboxgl.Marker({
      draggable: false,
      color: 'red',
    }).setLngLat([-16.60, 28.26]).addTo(map);*/

    this.mapListeners(map);
  }

  mapListeners(map:mapboxgl.Map) {

    map.on('click', (event) => this.mapClick(event));

    this.map.set(map);
  }


  mapClick(event: MapMouseEvent): void {
    if ( !this.map()) return;

    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const marker = new mapboxgl.Marker({
      draggable: false,
      color: color,
    }).setLngLat(event.lngLat).addTo(this.map()!);

    const newMarker: Marker = {
      id: UUIDV4(),
      mapboxMarker: marker
    }

    this.markers.set([newMarker, ...this.markers()]);
    console.log(this.markers());
  }

  flyToMarker(lngLat: LngLatLike) {
    if (!this.map()) return;

    this.map()?.flyTo({
      center: lngLat
    });
  }

}
