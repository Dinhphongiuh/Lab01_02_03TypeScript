import { Product } from "./Product";

export class OrderDetails
{
    private quantity: number;
    private product: Product;

    constructor(product: Product, quantity: number)
    {
        this.product = product;
        this.quantity = quantity;
    }

    getQuantity(): number
    {
        return this.quantity;
    }
    setQuantity(quantity: number)
    {
        this.quantity = quantity;
    }
    // 

    calcTotalPrice(): number
    {
        return this.quantity * this.product.getPrice();
    }

    toString(): string
    {
        return `${this.product.toString()}, ${this.calcTotalPrice()}`;
    }
}