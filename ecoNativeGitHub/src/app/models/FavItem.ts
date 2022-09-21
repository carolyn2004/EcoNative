import { products } from "./products";
export class FavItem {
    static products: any;
    constructor (products:products){
        this.products = products;
        this.price; //use of getters
    }
    products!: products; 
    quantity:number = 1;
    get price():number{
        return this.products.price * this.quantity;

    }
}