@ts-check

class Vehicle {
  make: string;
  model: string;
  wheels: number | string;
  status: "started" | "stopped" = "stopped";

  constructor(make: string, model: string, wheels: number | string) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, "four");
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is started.");
  } else {
    console.log("The vehicle is stopped.");
  }
}


const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make.toUpperCase());

const myBuick = new Car("Buick", "Regal");
if (typeof myBuick.wheels === "number") {
  myBuick.wheels = myBuick.wheels - 1;
} else {
  console.log(`Wheels are not adjustable for car: ${myBuick.wheels}`);
}
console.log(myBuick.wheels);
console.log(myBuick.model);


class NCycle<T> {
  make: T | T[];
  model: T | T[];
  wheels: number | string;
  status: "started" | "stopped" = "stopped";

  constructor(make: T | T[], model: T | T[], wheels: number | string) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  start(): void {
    this.status = "started";
  }

  stop(): void {
    this.status = "stopped";
  }

  print(index: number = 0): void {
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    } else if (Array.isArray(this.make) && Array.isArray(this.model) && index < this.make.length && index < this.model.length) {
      console.log(`This NCycle has a ${this.make[index]} ${this.model[index]} at ${index}.`);
    } else {
      console.log("This NCycle was not created properly.");
    }
  }

  printAll(): void {
    if (Array.isArray(this.make) && Array.isArray(this.model)) {
      for (let i = 0; i < Math.min(this.make.length, this.model.length); i++) {
        console.log(`This NCycle has a ${this.make[i]} ${this.model[i]} at ${i}.`);
      }
    } else {
      console.log(`This is a ${this.make} ${this.model} NCycle.`);
    }
  }
}

// Test cases
const singleNCycle = new NCycle("Yamaha", "MT-07", 2);
singleNCycle.print(); 
singleNCycle.printAll(); 

const multiNCycle = new NCycle(["Honda", "Kawasaki"], ["CBR500R", "Ninja 400"], 2);
multiNCycle.print(0);
multiNCycle.print(1); 
multiNCycle.printAll(); 