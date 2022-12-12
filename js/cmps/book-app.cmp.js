import { bookService } from '../services/book-service.js'

import bookFilter from './book-filter.cmp.js'
import bookDetails from './book-details.cmp.js'
import bookEdit from './book-edit.cmp.js'
import bookList from './book-list.cmp.js'

export default {
    template: `
    <section class="book-app">
        <book-filter  @filter="filter"/>
        <book-list 
            @selected="selectBook" 
            @remove="removeBook" 
            :books="booksToShow"/>

        <book-details 
            @close="selectedBook = null" 
            v-if="selectedBook" 
            :book="selectedBook"/>

        <book-edit @saved="bookSaved"/>
    </section>
    `,
    // v-if="filterBy.price.fromPrice"
    data() {
        return {
            books: bookService.query(),
            selectedBook: null,
            filterBy: {

                title: '',
                price: {
                    name: 'xx',
                    fromPrice: 0,
                    toPrice: Infinity
                }
            },

        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId)

            const idx = this.books.findIndex(book => book.id === bookId)
            this.books.splice(idx, 1)
        },
        selectBook(book) {
            this.selectedBook = book
        },
        bookSaved(book) {
            this.books.push(book)
        },
        filter(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy
        }
    },
    computed: {
        booksToShow() {
            // if()//toPrice
            // const regex = new RegExp(this.filterBy.price.fromPrice, 'i')
            // if(this.books.filter(book => book.listPrice.amount >= this.filterBy.price.fromPrice )    this.filterBy.price.fromPrice)
            // book.listPrice.amount
            // const regex = new RegExp(this.filterBy.price.fromPrice, 'i')
            // console.log(filteredByPrice, '^^^filtered by price^^^')

            const regex = new RegExp(this.filterBy.title, 'i')

            if (this.filterBy.price.fromPrice) {
                const filteredByPrice = this.books.filter(book => {
                    return (book.listPrice.amount >= this.filterBy.price.fromPrice) && (book.listPrice.amount <= this.filterBy.price.toPrice) && (regex.test(book.title))
                })
                return filteredByPrice
            }
            else {
                const regex = new RegExp(this.filterBy.title, 'i')
                return this.books.filter(book => regex.test(book.title))
            }
        }
    },
    components: {
        bookFilter,
        bookDetails,
        bookEdit,
        bookList,
    }
}