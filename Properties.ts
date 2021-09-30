class Point {
    constructor(private x?: number, private y?: number) { // so as not to get a compilatio error we use ? to make the parameters optional //
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y)
    }
    // for us to access x we need to create another method here (this is as if weve put it as private)//
    get X() {
        return this.x;
    }
    // we create this new method so as to set our own value for x //
    // we could simply create properties for a cleaner syntax by using set X() instead of setX() //
    set X(value) {
        if (value < 0)
            throw new Error('value cannot be less than 0.')

        this.x = value
    }
}

let point = new Point(1, 2)
let x = point.X // this is a more cleaner way compared to the one below //
point.X = 10
//let x = point.getX();
// point.setX(10) // our own value which is 10 //
point.draw()