import { Product } from "./Product";
import { OrderDetails } from "./OrderDetails";

class Order
{
    private orderID: number;
    private orderDate: Date;
    private lineItems: OrderDetails[];
    private count: number;

    constructor(orderID: number, orderDate: Date)
    {
        this.orderID = orderID;
        this.orderDate = orderDate;
        this.lineItems = [];
        this.count = 0;
    }

    addLineItem(product: Product, quantity: number): void
    {
        const orderDetails = new OrderDetails(product, quantity);
        this.lineItems.push(orderDetails);
        this.count += quantity;
    }

    calcTotalChange(): number
    {
        let totalChange: number = 0;
        for (const orderDetails of this.lineItems)
        {
            totalChange += orderDetails.calcTotalPrice();
        }
        return totalChange;
    }
}

const product1 = new Product("product 1", "P001", 10.5);
const product2 = new Product("product 2", "P002", 20.00);

const order = new Order(1, new Date());
order.addLineItem(product1, 2);
order.addLineItem(product2, 3);

console.log(order);
console.log(order.calcTotalChange());