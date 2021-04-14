import {Strategy} from "../src/strategy"

export class MergeSort implements Strategy {
    go(numbers: number[]) {
        console.log(`El algoritmo MergeSort ordena: ` + numbers + ` a `);
        let start = Date.now();
        let sortNumbers = this.mergeSort(numbers);
        let end = Date.now();
        console.log(sortNumbers + ` en ` + (end-start));
    }

    private mergeSort(numbers: number[]): number[] {
        let left: number[] = [];
        let right: number[] = [];
        let result: number[] = [];
        if(numbers.length <= 1) {
            return numbers;
        } else {
            let middle = numbers.length / 2;
            for(let i = 0; i < middle; i++) {
                left.push(numbers[i]);
            }
            for(let i = middle; i < numbers.length; i++) {
                right.push(numbers[i]);
            }
            left = this.mergeSort(left);
            right = this.mergeSort(right);
            if(left[left.length] <= right[0]) {
                left.concat(right);
                return left;
            }
            result = this.merge(left, right);
            return result;
        }
    }

    private merge(left: number[], right: number[]) {
        let result: number[] = [];
        while(left.length > 0 && right.length > 0) {
            if(left[0] <= right[0]) {
                result.push(left[0]);
                left.splice(0,1);
            } else {
                result.push(right[0]);
                right.splice(0,1);
            }
        }
        if (left.length > 0) {
            result.concat(left);
        }
        if (right.length > 0) {
            result.concat(right);
        }
        return result;
    }
}