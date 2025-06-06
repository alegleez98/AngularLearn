import { Product, taxCalculator } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia',
        price: 100.0
    },
    {
        description: 'iPad',
        price: 250.0
    }
];

const [total, tax] = taxCalculator({products: shoppingCart, tax: 0.15});
console.log('Total', total);
console.log('Tax', tax);