

const name: string = 'Alejandro';
let hpPoints: number | string = 95;
//let hpPoints: number | 'FULL' = 95;  Tambien es correcto si solo queremos que se identifique el valor FULL
const isAlive: boolean = true;


hpPoints = 'FULL';

console.log({
    name,hpPoints,isAlive
})
export {};