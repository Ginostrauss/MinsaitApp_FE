import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module'; // Percorso da aggiornare se necessario

import { ResultDetailsComponent } from './result-details.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('ResultDetailsComponent', () => {
  let component: ResultDetailsComponent;
  let fixture: ComponentFixture<ResultDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,ReactiveFormsModule, FormsModule], // Importa il modulo che contiene BreadcrumbsComponent
      declarations: [ResultDetailsComponent] // Solo il componente che stai testando
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Questo triggererà il ciclo di vita del componente e la view sarà renderizzata
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
