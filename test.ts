console.log('test');
let a: number;

a = 90;
a = 'yes';

let b: string = 3

let c = 3;
c = 33;
c = false;

function sum(a: number, b: number): number {
    return a + '3';
}
sum(1, 2);

// 字面量
let d: 'male' | 'ok'
let e: string | number;

// let f: any;
let f;
f = 0

e = f;

let g: unknown;
if(typeof g === 'string') {
    e = g;
}
e = g;
e = g as string;
e = <string> g;

function h(): never {
    // return 3
    throw new Error()
}

let i: {name: string, [propName: string]: any}
i = {name: 'dd', age: 9}

let j: (a: number, b: number)=>number
j = (a, b) => {return a + b}

let k: number[]
let l: Array<string>

let n: number;
enum m {
    a = 1,
    b = 2
}
// let o: { name: string, age: m, [propName: string]: string}
let o: { name: string, age: m, }

o = {
    name: 'nameo',
    age: m.a,
}

type p = string | 1 | 2;
let q: p
q = '3'

interface r {
    name: string;
    age: number;
}
interface r {
    like: string,
    sayHello(): void
}

const s: r = {
    name: 'dd',
    age: 9,
    like: 'ee',
    sayHello: () => {

    }
}
class t implements r {
    name: string;
    age: number;
    like: string;

    constructor(name: string) {
        this.name = name
    }

    sayHello(): void {
        throw new Error("Method not implemented.");
    }

}
 
function fn<T>(a: T): T {
    return a
}
fn(1)
fn<string>('name')
  
