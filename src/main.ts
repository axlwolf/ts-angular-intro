import './style.css';
import typescriptLogo from './typescript.svg';
import viteLogo from '/vite.svg';
import { setupCounter } from './counter.ts';
import { Hero, Person } from './08-clases';
import { whatsMyType } from './09-generics.ts';
import { SuperClass } from './10-decorators';
import {
  printChildren,
  Passenger,
  returnChildNumnber,
} from './11-optional-chainig';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);

const person = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('Ironman', 45, 'Tony', person);

console.log({ person, ironman });

let amIString = whatsMyType<string>('Hola Mundo');
let amINumber = whatsMyType<number>(5);
let amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));

const myClass = new SuperClass();

console.log(myClass);
myClass.print();

const passenger1: Passenger = {
  name: 'Axel',
  children: ['Melissa', 'Valeria'],
};

const passenger2: Passenger = {
  name: 'Meche',
};

printChildren(passenger2);

console.log({ passenger1 });

returnChildNumnber(passenger1);
returnChildNumnber(passenger2);
