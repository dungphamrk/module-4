class Circle {
    private radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }
    getRadius(): number {
        return this.radius;
    }

    setRadius(radius: number): void {
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    calculateCircumference(): number {
        return 2 * Math.PI * this.radius;
    }
}
let circle1=new Circle(12);
console.log( circle1.calculateArea());
console.log( circle1.calculateCircumference());

