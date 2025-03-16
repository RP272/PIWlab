const Cover = {
    Soft: 'Soft',
    Hard: 'Hard',
}

const bookNameInput = document.getElementById("name")
const coverInput = document.getElementById("cover")
const pageQuantityInput = document.getElementById("pageQuantity")
const authorInput = document.getElementById("author")
const descriptionInput = document.getElementById("description")
const addButton = document.getElementById("addButton")

class Book{
    constructor(name, cover, numberOfPages, author, description){
        this.name = name;
        this.cover = cover;
        this.numberOfPages = numberOfPages;
        this.author = author;
        this.description = description;
    }

    asHTML(){
        return `<div class="bookInfo">
        <div>Name: ${this.name}</div>
        <div>Cover: ${this.cover}</div>
        <div>Page quantity: ${this.numberOfPages}</div>
        <div>Author: ${this.author}</div>
        <div>Description: ${this.description}</div>
        </div>`
    }

    asObject(){
        return {
            'name': `${this.name}`,
            'cover': `${this.cover}`,
            'numberOfPages': `${this.numberOfPages}`,
            'author': this.author,
            'description': `${this.description}`
        }
    }
}

let books = localStorage.getItem("books")
if(books == null){
    books = [
        new Book(
            "Proces",
            Cover.Soft, 
            200, 
            "Franz Kafka", 
            "To opowieść o Józefie K., który pewnego dnia zostaje aresztowany, ale nie wie za co..."
        ),
        new Book(
            "Ferdydurke", 
            Cover.Hard, 
            250, 
            "Witold Gombrowicz", 
            "Pupa, gęba, łydka."
        ),
        new Book(
            "Faust", 
            Cover.Soft, 
            134, 
            "Johann Wolfgang von Goethe", 
            "Faust to dramat niemieckiego poety, polityka, uczonego Johanna Wolfganga von Goethego w dwóch częściach."
        ),
        new Book(
            "Pan Tadeusz, czyli ostatni zajazd na Litwie", 
            Cover.Hard, 
            210, 
            "Adam Mickiewicz", 
            "Poemat epicki Adama Mickiewicza wydany w dwóch tomach w 1834 w Paryżu"
        ),
        new Book(
            "Moby Dick", 
            Cover.Soft, 
            186, 
            "Herman Melville", 
            "Powieść amerykańskiego pisarza, uznawana jest za jedno z arcydzieł literatury światowej i klasykę literatury amerykańskiej"
        ),
        new Book(
            "Dżuma", 
            Cover.Hard, 
            321, 
            "Albert Camus", 
            "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu"
        ),
        new Book(
            "Dżuma", 
            Cover.Hard, 
            321, 
            "Albert Camus", 
            "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu"
        ),
        new Book(
            "Dżuma", 
            Cover.Hard, 
            321, 
            "Albert Camus", 
            "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu"
        ),
        new Book(
            "Dżuma", 
            Cover.Hard, 
            321, 
            "Albert Camus", 
            "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu"
        ),
    
        new Book(
            "Dżuma", 
            Cover.Hard, 
            321, 
            "Albert Camus", 
            "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu"
        ),
        new Book(
            "Dżuma", 
            Cover.Hard, 
            321, 
            "Albert Camus", 
            "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu"
        ),
        new Book(
            "Dżuma", 
            Cover.Hard, 
            321, 
            "Albert Camus", 
            "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu"
        ),
        new Book(
            "Dżuma", 
            Cover.Hard, 
            321, 
            "Albert Camus", 
            "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu"
        ),
    ]
    let booksJSON = []
    for(let book of books){
        booksJSON.push(book.asObject());
    }
    localStorage.setItem("books", JSON.stringify(booksJSON))
}else{
    let parsed = JSON.parse(books);
    books = []
    for(let e of parsed){
        books.push(new Book(e.name, e.cover, e.numberOfPages, e.author, e.description))
    }
}

addButton.addEventListener("click", () => {
    let newBook = new Book(bookNameInput.value, coverInput.value, pageQuantityInput.value, authorInput.value, descriptionInput.value)

    books.push(newBook);
    let booksJSON = [];
    for(let book of books){
        booksJSON.push(book.asObject());
    }
    localStorage.setItem("books", JSON.stringify(booksJSON))
    alert("Book has been successfully added!")
})
