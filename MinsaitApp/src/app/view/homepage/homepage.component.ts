import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {GenericService} from "../generic.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  typeOfPage!: string;
  private subscription!: Subscription;
  buttonValue!: string;

  constructor(private genericService: GenericService,
              private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscription = this.genericService.getData().subscribe((data: string) => {
      this.typeOfPage = data;
      this.cdRef.detectChanges();
    });
  }


  ngOndestroy(): void {
    this.subscription.unsubscribe();
  }

  handleButtonClick(value: string) {
    this.buttonValue = value;
  }
}
