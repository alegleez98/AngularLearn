import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifsService } from '../../services/Gifs.service';
import { Gif } from '../../interfaces/Gif';

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
    console.log({query});
    this.gifs = this.gifService.searchGifs(query);
  }

}
