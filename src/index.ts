import {Strategy} from "../src/strategy"

export class Ordenar {
    constructor(private numbers: number[], private algorithm: Strategy) {

    }

    setStrategy(strategy: Strategy) {
        this.algorithm = strategy;
    }

    logic() {
        this.algorithm.go(this.numbers);
    }
}