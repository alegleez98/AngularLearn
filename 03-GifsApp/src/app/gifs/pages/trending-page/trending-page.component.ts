import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { GifsService } from '../../services/Gifs.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';



@Component({
  selector: 'app-trending',
  templateUrl: './trending-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TrendingPageComponent {
  gifService = inject( GifsService );
  scrollStateService = inject( ScrollStateService );

  scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if ( !scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();

  }

  onScroll(event: Event) {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if ( !scrollDiv) return;
    const scrollTop:number = scrollDiv.scrollTop;
    const clientHeight:number = scrollDiv.clientHeight;
    const scrollHeight: number = scrollDiv.scrollHeight;
    const isAtBottom: boolean = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendingScrollState.set(scrollTop);
    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
  }

}
