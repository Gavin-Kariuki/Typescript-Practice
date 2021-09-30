class Point {
    x: number
    y: number

    constructor(x?: number, y?: number) { // so as not to get a compilatio error we use ? to make the parameters optional //
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point = new Point()
point.x = 1
point.y = 2
point.draw()