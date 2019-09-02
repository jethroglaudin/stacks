class Vehicle {
    constructor(doors, color, engine, drivetrain){
        this.doors = doors;
        this.color = color;
        this.engine = engine;
        this.drivetrain = drivetrain
    }
    
}

class Type extends(Vehicle){
    constructor(doors, color, engine, drivetrain, type) {
        super(doors, color, engine, drivetrain)
        this.type = type;
    }
}

class Sedan extends (Vehicle) {
    constructor(doors, color, engine, drivetrain, brand) {
        super(doors, color, engine, drivetrain);
        // this.brand = brand;
    }
    
}

class hatchback extends(Vehicle) {
    constructor(doors, color, engine, drivetrain) {
        super(doors, color, engine, drivetrain);
        // this.brand = brand;
    }
}


class Brand extends (Type){
    constructor(doors, color, engine, drivetrain, type, brand){
        super(doors, color, engine, drivetrain, type)
        this.brand = brand;
    }
}

const myCar = new Brand(2, "red", "v6", "awd", "sedan", "Toyota");


console.log(myCar);