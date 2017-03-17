import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'shiftPosition'})
export class ShiftPositionPipe implements PipeTransform {
    transform(value: string, args: string[]): any {
        if (!args)
            return value.substr(1) + ' ' + value.substr(0, 1);
        let pos: number = Number(args[0]);
        return value.substr(pos) + ' ' + value.substr(0, pos);
    }
    // <p>A: {{a | currency:'VND':true | shiftPosition }}</p>
}