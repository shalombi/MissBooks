import { bookService } from '../services/car-service.js'

import carFilter from './car-filter.cmp.js'
import carDetails from './car-details.cmp.js'
import carEdit from './car-edit.cmp.js'
import carList from './car-list.cmp.js'

export default {
    template: `
    <section class="car-app">
        <car-filter @filter="filter"/>
        <car-list 
            @selected="selectCar" 
            @remove="removeCar" 
            :cars="carsToShow"/>

        <car-details 
            @close="selectedCar = null" 
            v-if="selectedCar" 
            :car="selectedCar"/>

        <car-edit @saved="carSaved"/>
    </section>
    `,

// filterBy: {
//     title: '',
//     price: {
//         name: 'xx',
//         fromPrice: 90,
//         toPrice: Infinity
//     }
    data() {
        return {
            cars: bookService.query(),
            selectedCar: null,
            filterBy: {

                title: '',
                    price: {
                        name: 'xx',
                        fromPrice: 90,
                        toPrice: Infinity}
            },

        }
    },
    methods: {
        removeCar(carId) {
            bookService.remove(carId)

            const idx = this.cars.findIndex(car => car.id === carId)
            this.cars.splice(idx, 1)
        },
        selectCar(car) {
            this.selectedCar = car
        },
        carSaved(car) {
            this.cars.push(car)
        },
        filter(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy
        }
    },
    computed: {
        carsToShow() {
            // if()
            // const regex = new RegExp(this.filterBy.price.fromPrice, 'i')
            // if(  this.filterBy.price.fromPrice)
            // car.listPrice.amount
            // const regex = new RegExp(this.filterBy.price.fromPrice, 'i')



            const regex = new RegExp(this.filterBy.title, 'i')
            return this.cars.filter(car => regex.test(car.title))
        }
    },
    components: {
        carFilter,
        carDetails,
        carEdit,
        carList,
    }
}