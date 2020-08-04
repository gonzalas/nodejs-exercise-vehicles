class VehicleList {
    constructor(list) {
        this.list = list;
    }

    showMain() {
        this.showList();
        console.log('=============================');
        this.showDetails();
    }

    showList() {
        this.list.forEach((element) => {
            console.log(element.toString());
        });
    }

    moreExpensiveAndCheap() {
        return this.list.sort((a, b) => a.precio - b.precio);
    }

    contentY() {
        return this.list.findIndex((element) => element.modelo.includes('Y'));
    }

    showDetails() {
        console.log(
            'Vehículo más caro: ' +
            this.moreExpensiveAndCheap()[this.moreExpensiveAndCheap().length - 1]
            .marca +
            ' ' +
            this.moreExpensiveAndCheap()[this.moreExpensiveAndCheap().length - 1]
            .modelo
        );
        console.log(
            'Vehículo más barato: ' +
            this.moreExpensiveAndCheap()[0].marca +
            ' ' +
            this.moreExpensiveAndCheap()[0].modelo
        );
        console.log(
            "Vehículo que contiene en el modelo la letra 'Y': " +
            this.list[this.contentY()].marca +
            ' ' +
            this.list[this.contentY()].modelo +
            ' $' +
            this.list[this.contentY()].precio
        );
    }

    showOrderedVehicles() {
        const orderedVehicles = this.moreExpensiveAndCheap().reverse();

        console.log('Vehículos ordenados por precio de mayor a menor:\n');

        orderedVehicles.forEach((element) =>
            console.log(element.marca + ' ' + element.modelo)
        );
    }
}

module.exports = VehicleList;