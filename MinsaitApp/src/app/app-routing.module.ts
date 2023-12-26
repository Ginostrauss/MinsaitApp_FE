import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProjectsComponent} from "./view/projects/projects.component";
import {ResourcesComponent} from "./view/resources/resources.component";
import {HomepageComponent} from "./view/homepage/homepage.component";
import {AllocationsComponent} from "./view/allocations/allocations.component";

const routes: Routes = [
  { path: 'homepage', component: HomepageComponent, children: [
      { path: 'projects', component: ProjectsComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'allocations', component: AllocationsComponent },
    ]},

  { path: '', redirectTo: '/homepage', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
