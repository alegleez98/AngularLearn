import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifsListComponent } from "../../components/gifs-list/gifs-list.component";
import { GifsService } from '../../services/Gifs.service';



@Component({
  selector: 'app-trending',
  imports: [GifsListComponent],
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent {
  gifService = inject( GifsService );

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if ( !scrollDiv) return;
    const scrollTop:number = scrollDiv.scrollTop;
    const clientHeight:number = scrollDiv.clientHeight;
    const scrollHeight: number = scrollDiv.scrollHeight;
    const isAtBottom: boolean = scrollTop + clientHeight + 300 >= scrollHeight;
    console.log(isAtBottom);
    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }

}
