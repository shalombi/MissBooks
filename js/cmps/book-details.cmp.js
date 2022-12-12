export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h2>{{ book.description }}</h2>
            
            <!-- <pre>{{book}}</pre> -->
            <img :src="book.thumbnail" alt="">
            <h2 class="price">price: {{ book.listPrice.amount }} ILS</h2>
            <button @click="$emit('close')">Close</button>
        </section>
    `,
    computed: {
        imgUrl() {
            // return `../../img/${this.book.vendor}.png`
            return `book.thumbnail`
        }
    }
}