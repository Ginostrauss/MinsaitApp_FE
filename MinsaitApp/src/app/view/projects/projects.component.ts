import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';


interface SortingOption {
  id: string;
  descrizione: string;
}

@Component({
  selector: 'app-results',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

}
