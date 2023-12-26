import { Component, OnInit, ViewChild } from '@angular/core';
import {GenericService} from "../generic.service";

@Component({
  selector: 'app-result-details',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss']
})
export class ResourcesComponent implements OnInit{
  constructor(private genericService: GenericService) {
  }

  ngOnInit(): void {
    this.genericService.setData("Elenco delle risorse");
  }

}
