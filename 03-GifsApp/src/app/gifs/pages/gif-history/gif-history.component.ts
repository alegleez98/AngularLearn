import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifsService } from '../../services/Gifs.service';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";

@Component({
  selector: 'app-gif-history',
  imports: [GifsListComponent],
  templateUrl: './gif-history.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class GifHistoryComponent {

  gifService : GifsService = inject(GifsService);

  query = toSignal(inject(ActivatedRoute).params.pipe(
    map( params => params['query'])
  ));

  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query());
  })

}
