import { Component, OnDestroy, OnInit } from '@angular/core';
import { GridService } from '../grid-service.service';
import { InputModel } from '../input-model';

@Component({
  selector: 'app-grid-area',
  templateUrl: './grid-area.component.html',
  styleUrls: ['./grid-area.component.scss']
})
export class GridAreaComponent implements OnInit, OnDestroy {
  public maxLine: number = 0;
  public maxCol: number = 0;
  public items: Array<InputModel> = [];

  constructor(private gridService: GridService) { }

  ngOnInit(): void {
    this.gridService.subject.subscribe(model => {
      this.maxLine = model.maxLine;
      this.maxCol = model.maxCol;
      this.items = model.splitedList;
    });


  }

  public gridStyle() {
    const style = {
      'grid-area': 'auto '.repeat(this.maxCol),
      'row-gap': '50%'
    };
    
    return style;
  }

  ngOnDestroy(): void {
    this.gridService.subject.unsubscribe();
  }
  

}
