import { bookService } from '../services/car-service.js'

import carFilter from './car-filter.cmp.js'
import carDetails from './car-details.cmp.js'
import carEdit from './car-edit.cmp.js'
import carList from './car-list.cmp.js'

export default {
    template: `
    <section class="car-app">
        <car-filter  @filter="filter"/>
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
    // v-if="filterBy.price.fromPrice"
    data() {
        return {
            cars: bookService.query(),
            selectedCar: null,
            filterBy: {

                title: '',
                price: {
                    name: 'xx',
                    fromPrice: 0,
                    toPrice: Infinity
                }
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
            // if()//toPrice
            // const regex = new RegExp(this.filterBy.price.fromPrice, 'i')
            // if(this.cars.filter(car => car.listPrice.amount >= this.filterBy.price.fromPrice )    this.filterBy.price.fromPrice)
            // car.listPrice.amount
            // const regex = new RegExp(this.filterBy.price.fromPrice, 'i')
            // console.log(filteredByPrice, '^^^filtered by price^^^')

            const regex = new RegExp(this.filterBy.title, 'i')

            if (this.filterBy.price.fromPrice) {
                const filteredByPrice = this.cars.filter(car => {
                    return (car.listPrice.amount >= this.filterBy.price.fromPrice) && (car.listPrice.amount <= this.filterBy.price.toPrice) && ( regex.test(car.title))
                })
                return filteredByPrice
            }
            else {
                const regex = new RegExp(this.filterBy.title, 'i')
                return this.cars.filter(car => regex.test(car.title))
            }
        }
    },
    components: {
        carFilter,
        carDetails,
        carEdit,
        carList,
    }
}