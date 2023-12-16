import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {RouterModule} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    NavbarComponent
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
    NavbarComponent
  ]
})
export class SharedModule {
}
