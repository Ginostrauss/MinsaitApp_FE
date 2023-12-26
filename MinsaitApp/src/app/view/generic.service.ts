import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  private data = new BehaviorSubject<string>("");
  constructor() { }

  /*
   * Data transfer between components
   */

  setData(data: string) {
    this.data.next(data);
  }
  getData() {
    return this.data.asObservable();
  }


  /*
   * End Part of code for Data transfer between components
   */

}
