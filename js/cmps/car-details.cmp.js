export default {
    props: ['car'],
    template: `
        <section class="car-details">
            <span>{{ car.description }}</span>
            <h3>{{ car.maxSpeed }}</h3>
            <img :src="imgUrl" alt="">
            <button @click="$emit('close')">Close</button>
        </section>
    `,
    computed: {
        imgUrl() {
            return `../../img/${this.car.vendor}.png`
        }
    }
}