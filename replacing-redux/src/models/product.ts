export class Product {
    public id: string;
    public title: string;
    public description: string;
    public isFavorite = false;

    constructor(id: string, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }
}
