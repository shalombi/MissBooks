export default {
    props: ['car'],
    template: `
        <section class="car-details">
            <h2>{{ car.description }}</h2>
            
            <!-- <pre>{{car}}</pre> -->
            <img :src="car.thumbnail" alt="">
            <h2 class="price">price: {{ car.listPrice.amount }} ILS</h2>
            <button @click="$emit('close')">Close</button>
        </section>
    `,
    computed: {
        imgUrl() {
            // return `../../img/${this.car.vendor}.png`
            return `car.thumbnail`
        }
    }
}