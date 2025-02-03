
interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}

interface TaxCalculationsOptions {
    tax: number;
    products: Product[];
}

//function taxCalculator({tax, products}: TaxCalculationsOptions): [number, number] {
function taxCalculator(options: TaxCalculationsOptions): [number, number] {

    let total = 0;
    const {tax, products} = options;
    products.forEach( ({ price }) => {
        total += price;
    });

    return [total, total * tax];
} 


const shoppingCart = [phone, tablet];
const tax = 0.15;


const [total, taxes] = taxCalculator({products : shoppingCart, tax: tax});
console.log('Total', total);
console.log('Tax', taxes);






export {};