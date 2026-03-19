import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
const myWhishList = [];

console.log("Welcome to your Shopee cart!");

const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborguini", 39.99, 1);
const item3 = await createItem("Hotwheels Porshe", 25.99, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.addItem(myWhishList, { ...item2 });
await cartService.deleteItem(myCart, item1.name);
await cartService.removeItem(myCart, item2);

await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item2);

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);
