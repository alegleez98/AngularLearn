export class Person {
    public name: string;
    private address: string;

    constructor() {
        this.name = 'Alejandro';
        this.address = 'NY';
    }

}

const ironman = new Person();

console.log(ironman);