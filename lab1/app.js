const Cover = {
    Soft: 'Soft',
    Hard: 'Hard',
}
const bookList = document.getElementById("list")
const filterButton = document.getElementById("filterButton")

const bookNameInput = document.getElementById("name")
const coverInput = document.getElementById("cover")
const pageQuantityInput = document.getElementById("pageQuantity")
const authorInput = document.getElementById("author")
const wordInDescriptionInput = document.getElementById("wordInDescription")

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
}

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

let final = ""
let count = 0;
for(let book of books){
    final += book.asHTML()
}
bookList.innerHTML = final

filterButton.addEventListener("click", () => {
    final = "";
    count = 0;
    for(let book of books){
        if(bookNameInput.value != "" && book.name != bookNameInput.value) continue
        if(coverInput.value != "Any"){
            console.log(coverInput.value, book.cover)
            if(coverInput.value == "Hard" && book.cover != Cover.Hard) continue
            if(coverInput.value == "Soft" && book.cover != Cover.Soft) continue
        }
        if(pageQuantityInput.value != 0 && book.numberOfPages != pageQuantityInput.value) continue
        if(authorInput.value != "" && book.author != authorInput.value) continue
        if(wordInDescriptionInput.value != "" && book.description.includes(wordInDescriptionInput.value) == false) continue
        final += book.asHTML()
        count++;
    }
    if(count == 0){
        final = "no results. :c"
    }
    bookList.innerHTML = final
})
