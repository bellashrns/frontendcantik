import test1 from "../assets/test1.jpg";
import test2 from "../assets/test2.jpg";
import test3 from "../assets/test3.jpg";

const products = [
    {
        id: 1,
        src: test1,
        price: 10000,
        name: 'test1'
    },
    {
        id: 2,
        src: test2,
        price: 20000,
        name: 'test2'
    },
    {
        id: 3,
        src: test3,
        price: 30000,
        name: 'test3'
    },
];

const categories = [
    "Fresh Flower", "Preserved & Dried Flowers", "Artificial Flowers", "Bloombox", "Flower Basket", "Vase Arrangement", "Money Bouquet", "Flower Board", "Standing Flower", "Frame"
];

const cart = [
    {
        id: 2,
        quantity: 5
    },
    {
        id: 1,
        quantity: 2
    },
    {
        id: 3,
        quantity: 3
    },
];

export {products, categories, cart};