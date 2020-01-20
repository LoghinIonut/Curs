class Trapez extends Patrulater {
    constructor(x, y, bazaMica, bazaMare, l1, l2, h) {
        super(x, y, bazaMare, h);
        this.name = "trapez";
        this.bazaMica = bazaMica;
        this.l1 = l1;
        this.l2 = l2;
    }
    area() {
        return (this.bazaMica + this.width) * this.height / 2

    }
    perimeter() {
        return this.bazaMica + this.width + this.l1 + this.l2

    }
}