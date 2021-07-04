export class InputModel {
    public row: number;
    public col: number;
    public label: string;
    public type: InputType;
    public placeHodler?: string;
    public options?: Array<string>;

    constructor(line: Array<string>) {
        this.row = +line[0];
        this.col = +line[1];
        this.label = line[2];     
        this.type = line[3] === 'SELECT' ? InputType.Select : InputType.TextInput;

        if (this.type === InputType.Select) {
            this.options = line[4].split(',');
        } else {
            this.placeHodler = line[4]; 
        }                    
    }
}

export enum InputType {
    Select = 'SELECT',
    TextInput = 'TEXT_INPUT'
}
