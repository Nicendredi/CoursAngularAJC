export class Item {
    marque: string
    prix: number

    constructor(a: string, b: number) {
        this.marque = a;
        this.prix = b;
    }
    
    getinfo() {
        return this.marque + "  " + this.prix;
    }
}
