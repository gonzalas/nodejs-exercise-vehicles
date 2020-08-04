const Vehicle = require('../classes/vehicle');

class Car extends Vehicle {
    constructor(marca, modelo, precio, puertas) {
        super(marca, modelo, precio);
        this.puertas = puertas;
    }

    toString() {
        return (
            'Marca: ' +
            this.marca +
            ' // Modelo: ' +
            this.modelo +
            ' // Puertas: ' +
            this.puertas +
            ' // Precio: $' +
            parseFloat(this.precio).toFixed(2)
        );
    }
}

module.exports = Car;