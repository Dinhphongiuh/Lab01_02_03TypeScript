export class Product
{
    private description: string;
    private productID: string;
    private price: number;

    constructor(description: string, productID: string, price: number)
    {
        this.description = description;
        this.productID = productID;
        this.price = price;
    }

    getDescription(): string
    {
        return this.description;
    }
    setDescription(description: string)
    {
        this.description = description;
    }
    getProductID(): string
    {
        return this.productID;
    }
    setProductID(productID: string)
    {
        this.productID = productID;
    }
    getPrice(): number
    {
        return this.price;
    }
    setPrice(price: number)
    {
        this.price = price;
    }

    // 

    toString(): string
    {
        return `productID: ${this.productID}, description: ${this.description}, price: ${this.price}`;
    }
}