const CarProto = {
    init(make, speed){
        this.make = make;
        this.speed = speed;
    },

    accelerate(speed){
        this.speed += speed;
        console.log(`${this.make} is going at a speed of ${this.speed}`);
        
    },

    brake(speed){
        this.speed -= speed;
        console.log(`${this.make} is going at a speed of ${this.speed}`);

    }
}

const ford = Object.create(CarProto);
ford.init("Ford", 90);
ford.accelerate();
ford.brake();