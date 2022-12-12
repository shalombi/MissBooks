export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <img class="prev-img" :src="book.thumbnail"/>
            <h2>{{ book.title }}</h2>
            <h3>price: {{ book.listPrice.amount }} ILS</h3>
            
            <!-- <h3>{{ book.maxSpeed }}</h3> -->
        </section>
    `,
}