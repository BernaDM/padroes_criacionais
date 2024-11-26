class Car {
  private type: string;

  constructor() {
      this.type = "Carro esportivo";
  }

  public getType(): string {
      return this.type;
  }
}

class Bike {
  private type: string;

  constructor() {
      this.type = "Bicicleta de montanha";
  }

  public getType(): string {
      return this.type;
  }
}


interface VehicleFactory {
  createCar(): Car;
  createBike(): Bike;
}


class SportsVehicleFactory implements VehicleFactory {
  public createCar(): Car {
      return new Car();
  }

  public createBike(): Bike {
      return new Bike();
  }
}


const factory = new SportsVehicleFactory();
const carrro = factory.createCar();
const bicicleta = factory.createBike();

console.log(car.getType());  
console.log(bike.getType());  