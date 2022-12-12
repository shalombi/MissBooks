import carPreview from './car-preview.cmp.js'

export default {
    props:['cars'],
    template: `
        <section class="car-list">
            <ul>
                <li v-for="car in cars" :key="car.id">
                    <car-preview :car="car"/>
                    <section class="actions">
                        <button @click="showDetails(car)">Details</button>
                        <button @click="remove(car.id)">x</button>
                    </section>
                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(carId){
            this.$emit('remove', carId)
        },
        showDetails(car){
            this.$emit('selected', car)
        }
    },
    components: {
        carPreview,
    }
}