export class Product {
    id: string;
    name: string;
    price: number;
    img: File;

    constructor(name: string, price: number, img: File) {
        this.name = name;
        this.price = price;
        this.img = img;
    }
}