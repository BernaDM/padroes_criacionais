class Cars {
  private type: string;

  constructor() {
      this.type = "Carro comum";
  }

  public getType(): string {
      return this.type;
  }
}

class Bikes {
  private type: string;

  constructor() {
      this.type = "Bicicleta comum";
  }

  public getType(): string {
      return this.type;
  }
}


const car = new Cars();
const bike = new Bikes();

console.log(car.getType());  
console.log(bike.getType());  