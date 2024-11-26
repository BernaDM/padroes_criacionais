// Abstract Product
interface Vehicle {
  getType(): string;
}

// Concrete Products
class SportsCar implements Vehicle {
  private type: string;

  constructor() {
      this.type = "Carro esportivo";
  }

  public getType(): string {
      return this.type;
  }
}

class MountainBike implements Vehicle {
  private type: string;

  constructor() {
      this.type = "Bicicleta de montanha";
  }

  public getType(): string {
      return this.type;
  }
}

// Abstract Factory
interface VehicleFactory {
  createCar(): Vehicle;
  createBike(): Vehicle;
}

// Concrete Factory
class SportsVehicleFactory implements VehicleFactory {
  public createCar(): Vehicle {
      return new SportsCar();
  }

  public createBike(): Vehicle {
      return new MountainBike();
  }
}

// Client
const factory: VehicleFactory = new SportsVehicleFactory();
const cars = factory.createCar();
const bikes = factory.createBike();

console.log(car.getType());  // Output: "Carro esportivo"
console.log(bike.getType()); // Output: "Bicicleta de montanha"
