class Triunghi extends GeometricShape {
    constructor(x, y, z) {
        super("triunghi");
        this.name = "triunghi";
        this.x = x;
        this.y = y;
        this.z = z;

        
    }
    area() {
        var per = this.perimeter()
        return Math.floor(Math.sqrt(per * (per - this.x) * (per - this.y) * (per - this.z)))
    }
    perimeter() {
        return this.x + this.y + this.z

    }
}