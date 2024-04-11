class Rectangle {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

     getWidth(): number {
        return this.width;
    }

     setWidth(width: number): void {
        this.width = width;
    }

     getHeight(): number {
        return this.height;
    }

     setHeight(height: number): void {
        this.height = height;
    }

     calculateArea(): number {
        return this.width * this.height;
    }

     calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const rectangle1 = new Rectangle(5, 7);


console.log("Chu vi của hình chữ nhật:", rectangle1.calculatePerimeter());
console.log("Diện tích của hình chữ nhật:", rectangle1.calculateArea());



