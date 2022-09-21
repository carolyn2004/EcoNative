import { FavItem } from "./FavItem";

export class Fav{
    items:FavItem[] = [];

    get totalPrice(): number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });

        return totalPrice;
    }
} 