import {Strategy} from "../src/strategy"

export class BubbleSort implements Strategy {
    go(numbers: number[]) {
        console.log(`El algoritmo BubbleSort ordena: ` + numbers + ` a `);
        let start = Date.now();
        for(let i = 1; i<numbers.length; i++) {
            for(let j = 0; j<numbers.length-1; j++) {
                if(numbers[j] > numbers[j+1]) {
                    let aux: number = numbers[j];
                    numbers[j] = numbers[j+1];
                    numbers[j+1] = aux;
                }
            }
        }
        let end = Date.now();
        console.log(numbers + ` en ` + (end-start));
    }
}