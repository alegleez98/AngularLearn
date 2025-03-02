import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifsService } from '../../services/Gifs.service';
import { Gif } from '../../interfaces/Gif';
import { GifMapper } from '../../mapper/gif.mapper';

@Component({
  selector: 'app-search',
  imports: [GifsListComponent],
  templateUrl: './search-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SearchPageComponent {

  gifService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch( query:string ) {
    this.gifService.searchGifs(query).subscribe( (resp) => {
      this.gifs.set(resp);
    });
  }

}
