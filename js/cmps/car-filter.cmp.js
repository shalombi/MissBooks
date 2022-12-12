export default {
    template: `

            <section class="car-filter">
            Search title:
             <input 
                    @input="filter"
                    v-model="filterBy.title" 
                    type="text" 
                    placeholder="Search title">
            </section>

            <section class="car-filter">
            from price: 
            <input 
                    @input="filter"
                    v-model="filterBy.price.fromPrice" 
                    type="number" 
                    placeholder="from price">
            </section>
            to price: 
            <input 
                    @input="filter"
                    v-model="filterBy.price.toPrice" 
                    type="number" 
                    placeholder="to price">
            </section>

    `,
    data() {
        return {
            filterBy: {
                title: '',
                price: {
                    name: 'xx',
                    fromPrice: 0,
                    toPrice: Infinity
                }

            }
        }
    },
    methods: {
        filter() {
            this.$emit('filter', this.filterBy)
        }
    }
}