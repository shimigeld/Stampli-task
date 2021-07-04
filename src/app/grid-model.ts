import { InputModel } from "./input-model";

export class GridModel {
    public maxLine: number;
    public maxCol: number;
    public splitedList: Array<InputModel>;

    constructor(maxLine: number, maxCol: number, splitedList: Array<InputModel>) {
        this.maxLine = maxLine;     
        this.maxCol = maxCol;        
        this.splitedList = splitedList;        
    }
}
