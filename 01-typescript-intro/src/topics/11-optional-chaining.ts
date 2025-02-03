export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Alejandro',
}

const passenger2: Passenger = {
    name: 'Pedro',
    children: ['Fernando', 'Agustina']
}

const printChildren = ( passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;    // el ? es el optional chaining
    console.log(passenger.name, howManyChildren);          // o encadenamiento opcional
}

printChildren(passenger2);
printChildren(passenger1);