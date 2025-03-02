import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/Gif';
import { GifMapper } from '../mapper/gif.mapper';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>({});
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

  constructor() {
    this.loadTrendingGifs();
  }

  loadTrendingGifs() {

    this.http.get<GiphyResponse>(`${environment.giphyURL}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKeys,
        limit: 20,
      }
    }).subscribe( (resp) => {
      const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
      this.trendingGifs.set(gifs);
      this.trendingGifsLoading.set(false);
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
}
