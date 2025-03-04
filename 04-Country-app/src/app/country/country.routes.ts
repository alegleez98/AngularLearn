import { ByCapitalPageComponent } from "./pages/by-capital-page/by-capital-page.component";
import { Routes } from "@angular/router";


const countryRoutes: Routes = [
  {
    path: '',
    component: ByCapitalPageComponent,
  }
];

export default countryRoutes;
