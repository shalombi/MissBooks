import { bookService } from "../services/book-service.js"

export default {
    template: `
        <section class="book-edit">
            <h1 class="book-edit-headline">Book Edit</h1>
            <form @submit.prevent="save">

                <div>
                    <input type="text" v-model="bookToEdit.title" placeholder="title">
                </div>

                <div>
                    <input type="number" v-model.number="bookToEdit.listPrice.amount" placeholder="price">
                </div>
                
                <div>
                    <select v-model="bookToEdit.listPrice.currencyCode" placeholder="currency"> 
                        <option>EUR</option>
                        <option>ILS</option> 
                        <option>USD</option> 
                    </select>
                </div>

                <div>
                    <button class="save-btn">Save</button>
                </div>

            </form>
        </section>
    `,
    data() {
        return {
            bookToEdit: bookService.getEmptyBook(),
        }
    },
    methods: {
        save() {
            const book = bookService.save(this.bookToEdit)
            this.$emit('saved', book)
            this.bookToEdit = bookService.getEmptyBook()
        }
    }
}