import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() buttonClicked = new EventEmitter<string>();

  handleClick(type: string) {
    this.buttonClicked.emit(type);
  }
}
