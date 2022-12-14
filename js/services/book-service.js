import { utilService } from './util-service.js'
import { starterBooks } from './starter-books.js'

const BOOKS_KEY = 'books'
_createBooks()

export const bookService = {
    query,
    remove,
    save,
    getEmptyBook,
}

function query() {
    return utilService.loadFromStorage(BOOKS_KEY)
}

function remove(bookId) {
    const books = query()
    const idx = books.findIndex(book => book.id === bookId)
    books.splice(idx, 1)
    utilService.saveToStorage(BOOKS_KEY, books)
}

function save(book) {
    book.id = utilService.makeId()
    const books = query()
    books.push(book)
    utilService.saveToStorage(BOOKS_KEY, books)
    return book
}

function getEmptyBook() {
    return {
        id: '',
        title: '',
        thumbnail: (Math.random() > 0.5) ? "http://coding-academy.org/books-photos/11.jpg" : "http://coding-academy.org/books-photos/10.jpg",
        listPrice: {
            amount: '',
            currencyCode: "EUR",
            isOnSale: true
        }
    }
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOKS_KEY)
    if (!books || !books.length) {
        books = []
        books = starterBooks.getgBooks()

        // books.push(_createBook('Audu Mea', 300))
        // books.push(_createBook('Fiak Ibasa', 120))
        // books.push(_createBook('Subali Pesha', 100))
        // books.push(_createBook('Mitsu Bashi', 150))
        utilService.saveToStorage(BOOKS_KEY, books)
    }
    return books
}

function _createBook(vendor, maxSpeed = 250) {
    const book = {
        id: utilService.makeId(),
        vendor,
        maxSpeed,
    }
    return book
}
