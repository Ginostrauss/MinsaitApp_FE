import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CdkAccordionModule,
    RouterModule
  ],
    exports: [
        RouterModule,
        NavbarComponent,
        SidebarComponent,
        HeaderComponent
    ]
})
export class SharedModule {
}
