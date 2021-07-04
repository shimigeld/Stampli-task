import { Component, Input, OnInit } from '@angular/core';
import { InputType } from '../input-model';

@Component({
  selector: 'grid-input',
  templateUrl: './grid-input.component.html',
  styleUrls: ['./grid-input.component.scss']
})
export class GridInputComponent implements OnInit {
  @Input() public item: any;
  constructor() {}

  ngOnInit(): void {
  }
 
  public CapitalizeFirstLetter(input: string): string {
    return input.replace(/^./, input[0].toUpperCase());
  }

  public typeSelector(type: InputType): string {
    return type === InputType.Select ? 'select': 'input';
  }


}
