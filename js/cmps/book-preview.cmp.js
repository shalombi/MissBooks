export default {
    props: ['book'],
    template: `
        <section class="book-preview">
            <img class="prev-img" :src="book.thumbnail"/>
            <h2>{{ book.title }}</h2>
            <h3>price: {{ book.listPrice.amount }} {{setCurrency}}</h3>
            
            <!-- <h3>{{ book.maxSpeed }}</h3> -->
        </section>
    `,
    data() {
        return {
            book: this.book
        }
    },
    computed: {
        setCurrency() {

            // return ('kimi')

            const strCurrency = this.book.listPrice.currencyCode
            if (strCurrency === 'ILS') return ('₪')
            if (strCurrency === 'EUR') return ('€')
            if (strCurrency === 'USD') return ('$')
        }
    }

    ,
}