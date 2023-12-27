import {Component, Input, OnInit, SimpleChange} from '@angular/core';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  @Input() buttonValue!: string;
  text: string = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChange): void {
    if (changes) {
      console.log('Tasto ricevuto nel componente BREADCRUMBS:', this.buttonValue);
      if(this.buttonValue !== undefined){
        this.text = this.buttonValue;
        console.log('Tasto ricevuto nel componente BREADCRUMBS:', this.text);
      } else {
        this.text = 'progects';
      }
    }
  }
}
