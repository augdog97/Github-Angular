import {Pipe, PipeTransform} from '@angular/core';

/*
    1. using the Pipe decorator to define to pipe name that is used within template expressions. The pipes name is 'truncate'
    2. Every pipe class implements the PipTransform interfaces transform method.
        - The trasnform method accepts an input value followed by optional parameters and returns the trasnformed value. 
            - In the code below, the 'value' is the string we want to truncate and 'limit' determines the limit of our truncation. 
*/
@Pipe({name: 'truncate'})

export class Truncatepipe implements PipeTransform {
    transform(value: string, limit: number):string {
        return value.substring(0, limit) + "...";
    }
}