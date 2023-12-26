import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {HomepageComponent} from './view/homepage/homepage.component';
import {ProjectsComponent} from './view/projects/projects.component';
import {ResourcesComponent} from './view/resources/resources.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AllocationsComponent } from './view/allocations/allocations.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ProjectsComponent,
    ResourcesComponent,
    AllocationsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
