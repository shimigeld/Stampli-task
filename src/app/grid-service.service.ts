import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GridModel } from './grid-model';

@Injectable({
  providedIn: 'root'
})
export class GridService {
  public subject = new Subject<GridModel>();
  
  constructor() { }
}
