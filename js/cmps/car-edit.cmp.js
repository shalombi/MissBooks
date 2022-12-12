import { bookService } from "../services/car-service.js"

export default {
    template: `
        <section class="car-edit">
            <h1>Car Edit</h1>
            <form @submit.prevent="save">
                <input type="text" v-model="carToEdit.title">
                <input type="number" v-model.number="carToEdit.maxSpeed">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return { 
            carToEdit: bookService.getEmptyBook()
        }
    },
    methods:{
        save(){
            const car = bookService.save(this.carToEdit)
            this.$emit('saved', car)
            this.carToEdit = bookService.getEmptyBook()
        }
    }
}