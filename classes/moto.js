const Vehicle = require('../classes/vehicle');

class Moto extends Vehicle {
    constructor(marca, modelo, precio, cilindrada) {
        super(marca, modelo, precio);
        this.cilindrada = cilindrada;
    }

    toString() {
        return (
            'Marca: ' +
            this.marca +
            ' // Modelo: ' +
            this.modelo +
            ' // Cilindrada: ' +
            this.cilindrada +
            'c // Precio: $' +
            parseFloat(this.precio).toFixed(2)
        );
    }
}

module.exports = Moto;