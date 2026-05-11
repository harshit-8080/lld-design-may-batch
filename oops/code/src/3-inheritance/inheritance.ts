class Vehicle {
    tyre: number
    color: string
    numberOfSeats: number
    protected vehicleNumber: string

    constructor(vehicleNumber: string, color: string, numberOfSeats: number, tyre: number) {
        this.vehicleNumber = vehicleNumber;
        this.color = color;
        this.numberOfSeats = numberOfSeats;
        this.tyre = tyre;
    }

    getColor(): string {
        return this.color
    }
    getVehicleNumber(): string {
        return this.vehicleNumber
    }
}

class Car extends Vehicle {
    manual: boolean

    constructor(vehicleNumber: string, color: string, 
        numberOfSeats: number, tyre: number, manual: boolean) {
        super(vehicleNumber, color, numberOfSeats, tyre);
        this.manual = manual;
    }

    getCarDetails(): string {
        return this.vehicleNumber;
    }

    pressAccelerator(): void {
        console.log("pressAccelerator");
    }
}

class ElectricCar extends Car {
    getElectricCarDetails(): string {
        return this.vehicleNumber;
    }


    pressAccelerator(): void {
        console.log("pressAccelerator differently for electric car");
    }
}












