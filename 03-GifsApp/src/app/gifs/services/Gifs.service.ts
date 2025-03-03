import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/Gif';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';




const loadFromLocalStorage = () => {
  const gifsFromLocalStorage = localStorage.getItem('gifs') ?? '{}';
  const gifs = JSON.parse(gifsFromLocalStorage);

  return gifs;


}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(false);
  private trendingPage = signal(0);

  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  trendingGifGroup = computed<Gif[][]>( () => {
    const groups = [];
    for ( let i = 0; i<this.trendingGifs().length; i +=3) {
      groups.push( this.trendingGifs().slice(i, i+3));
    }
    return groups;
  })

  constructor() {
    this.loadTrendingGifs();
  }

  saveGifsToLocalStorage = effect(() => {
    const historyString = JSON.stringify(this.searchHistory());
    localStorage.setItem('gifs', historyString);
  });

  loadTrendingGifs() {

    if ( this.trendingGifsLoading() ) return;

    this.trendingGifsLoading.set(true);

    this.http.get<GiphyResponse>(`${environment.giphyURL}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKeys,
        limit: 20,
        offset: this.trendingPage() * 20,
      }
    }).subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.update(currentGifs => [...currentGifs, ...gifs]);
      this.trendingGifsLoading.set(false);
      this.trendingPage.update( currentPage => currentPage += 1)
    });
  }

  searchGifs(query: string) {
    return this.http.get<GiphyResponse>(`${environment.giphyURL}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKeys,
        q: query,
        limit: 20,
      }
    }).pipe(
      map( ({ data }) => data ),
      map( (items) => GifMapper.mapGiphyItemsToGifArray(items) ),
      tap( items => {
        this.searchHistory.update( history => ({
          ...history, [query.toLowerCase()]: items
        }))
      })
    );
  }

  getHistoryGifs( query: string ): Gif[] {
    return this.searchHistory()[query] ?? [];
  }
}
