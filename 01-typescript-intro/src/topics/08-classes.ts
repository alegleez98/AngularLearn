export class Person {
    /* public name: string;
    private address: string; */

    constructor(
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No address'
    ) {}
}

/* export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string
    ) {
        super(realName, 'New York');
    }
} */

export class Hero {

    

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ) {}
}

const person = new Person('Tony', 'Stark', 'New York');
const ironman = new Hero('IronMan',45,'Tony Stark', person);

console.log(ironman);