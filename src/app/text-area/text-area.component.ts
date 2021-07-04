import { Component, OnInit } from '@angular/core';
import { GridModel } from '../grid-model';
import { GridService } from '../grid-service.service';
import { InputModel } from '../input-model';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  public input: string | undefined;

  constructor(private gridService: GridService) { }

  ngOnInit(): void {
  }

  public textAreaChanged(input: any): void {
    const splitedList: Array<InputModel> = [];
    const rows: Array<string> = input.value.split(/\n/);
    let maxLine: number = 0;
    let maxCol: number = 0;
    rows.forEach((row: string) => {
      const splitedRow = row.split(';');

      maxLine = +splitedRow[0] > maxLine ? +splitedRow[0]: maxLine; 
      maxCol = +splitedRow[1] > maxCol ? +splitedRow[1]: maxCol; 

      const input = new InputModel(splitedRow);
      splitedList.push(input);
    });

    const gridModel = new GridModel(maxLine, maxCol, splitedList);
    this.gridService.subject.next(gridModel);
  }

}
