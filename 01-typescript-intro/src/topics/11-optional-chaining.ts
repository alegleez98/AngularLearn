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

const printChildren = ( passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;    // el ? es el optional chaining o encadenamiento opcional
    //const howManyChildren = passenger.children!.length || 0;    // el ! nos asegura que tendra valor, su nombre not null assertion operator

    console.log(passenger.name, howManyChildren);    
    return howManyChildren;   
}

printChildren(passenger2);
printChildren(passenger1);