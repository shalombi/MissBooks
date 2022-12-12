import { bookService } from "../services/book-service.js"

export default {
    template: `
        <section class="book-edit">
            <h1 class="book-edit-headline">Book Edit</h1>
            <form @submit.prevent="save">
                <input type="text" v-model="bookToEdit.title">
                <input type="number" v-model.number="bookToEdit.listPrice.amount">
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            bookToEdit: bookService.getEmptyBook()
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