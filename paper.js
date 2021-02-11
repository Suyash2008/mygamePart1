class Paper {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2
        };
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius, options);
        this.image = loadImage("basketball.png");
        World.add(world, this.body);
    }
    display() {
        var p = this.body.position;
        push();
        translate(p.x, p.y);
        rotate(this.body.angle)
        imageMode(CENTER);
        //fill("white");
        image(this.image,0,0, this.radius * 2);
        // image(this.image, p.x, p.y);
        pop();
    }
};