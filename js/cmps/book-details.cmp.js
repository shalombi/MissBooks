export default {
    props: ['book'],
    template: `
        <section class="book-details">
            <h2> 
                 <span class="info-book">Description : </span>
                 {{ book.description }}
            </h2>

            <h2>
                <span class="info-book">Reading length : </span>  
                {{ readingLength}}
            </h2>

            <h2>
            <span class="info-book">Published date : </span>  
                {{publishedDateDesc}}
            </h2>
            
            <img :src="book.thumbnail" alt="">
            <h2 class="price">price:<span :class="priceStyle">{{ book.listPrice.amount }} {{ book.listPrice.currencyCode }} </span> </h2>
            <button @click="$emit('close')">Close</button>
        </section>
    `,

    // computed: {
    //     counterStyle(){
    //         return { low: this.counter < 3, high: this.counter > 7 }
    //     }
    data() {
        return {
            descPublished: {
                new: 'New!',
                veteran: 'Veteran Book'
            }
        }
    },
    computed: {
        imgUrl() {
            return `book.thumbnail`
        },

        readingLength() {
            const pageCount = this.book.pageCount

            let pageCountDesc = ''
            if (pageCount > 500) pageCountDesc = 'long reading'
            if (pageCount > 200) pageCountDesc = 'decent reading'
            if (pageCount <= 200) pageCountDesc = 'light reading'
            return pageCountDesc
        },
        publishedDateDesc() {

            const publishedDate = this.book.publishedDate
            const date = new Date();
            const timePublished = date.getFullYear() - publishedDate
            const publishedDateToStr = (timePublished < 1) ? this.descPublished.new : this.descPublished.veteran
            return publishedDateToStr
        },
        priceStyle() {
            return { red: this.book.listPrice.amount >= 65, green: this.book.listPrice.amount < 65 }
            //         return { low: this.counter < 3, high: this.counter > 7 }
        }
    }
}
