import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GifsSideMenuComponent } from "../../components/side-menu/side-menu.component";

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, GifsSideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class DashboardComponent { }
