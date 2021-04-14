import 'mocha';
import {expect} from 'chai';
import {Ordenar} from "../src/index";
import {Strategy} from "../src/strategy"
import {BubbleSort} from "../src/bubbleSort"
import {MergeSort} from "../src/mergeSort"


describe(`Test Clase Ordenar`, () => {
    let resolver = new Ordenar([5,4,6], new BubbleSort());
    it(`resolver pertenece a la clase \"Ordenar\" `, () => {
        expect(resolver).to.be.an.instanceOf(Ordenar);
    })

    /*it(`El algoritmo BubbleSort ordena [5,4,6] a [4,5,6] en segundos`, () => {
        expect(resolver.logic()).to.be.equal("")
    }) */ 
})
