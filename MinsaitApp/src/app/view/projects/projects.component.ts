import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {GenericService} from "../generic.service";


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

  typeOfPage: string = "";
  constructor(private genericService: GenericService) {
  }

  ngOnInit(): void {
    this.genericService.setData("Elenco dei progetti");
  }

}
