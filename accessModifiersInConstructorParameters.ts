class Point {
    constructor(public x?: number, private y?: number) { // so as not to get a compilatio error we use ? to make the parameters optional //
        // this.x = x; // this code is redundant so we give the parameters an access modifier //
        // this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
}

let point = new Point(1, 2)
point.x // so when we create an object here we can initialize x since its public //
point.draw()