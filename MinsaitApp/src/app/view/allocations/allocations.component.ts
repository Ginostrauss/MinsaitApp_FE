import {Component, OnInit} from '@angular/core';
import {GenericService} from "../generic.service";

@Component({
  selector: 'app-allocations', templateUrl: './allocations.component.html', styleUrls: ['./allocations.component.scss']
})
export class AllocationsComponent implements OnInit {

  constructor(private genericService: GenericService) {
  }

  ngOnInit(): void {
    this.genericService.setData("Elenco delle allocazioni");
  }
}
