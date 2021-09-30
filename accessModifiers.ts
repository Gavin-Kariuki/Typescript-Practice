// in this we are trying to avoid changing the parameters after initializing them //
// we can use access modifiers such as private, public and protected as shown below //
class Point {
    private x: number
    y: number

    constructor(x?: number, y?: number) { // so as not to get a compilatio error we use ? to make the parameters optional //
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point = new Point(1, 2)
point.draw()
point.draw()