export default {
    props: ['car'],
    template: `
        <section class="car-preview">
            <img class="prev-img" :src="car.thumbnail"/>
            <h2>{{ car.title }}</h2>
            <h3>price: {{ car.listPrice.amount }} ILS</h3>
            
            <!-- <h3>{{ car.maxSpeed }}</h3> -->
        </section>
    `,
}