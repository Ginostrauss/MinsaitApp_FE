import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResultsComponent} from "./view/results/results.component";
import {ResultDetailsComponent} from "./view/result-details/result-details.component";
import {HomepageComponent} from "./view/homepage/homepage.component";

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent },
  { path: 'result', component: ResultsComponent },
  { path: 'result-detail', component: ResultDetailsComponent },
  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
