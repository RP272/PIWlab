import { createContext, useState } from "react";

export const BooksContext = createContext();

export const BooksProvider = ({ children }) => {
    const [bookList, setBookList] = useState([
        {
            id: 1,
            name: "Proces",
            cover: "soft", 
            numberOfPages: 200, 
            author: "Franz Kafka", 
            description: "To opowieść o Józefie K., który pewnego dnia zostaje aresztowany, ale nie wie za co..."
        },
        {
            id: 2,
            name: "Ferdydurke",
            cover: "hard", 
            numberOfPages: 250, 
            author: "Witold Gombrowicz", 
            description: "Pupa, gęba, łydka.",
        },
        {
            id: 3,
            name: "Faust",
            cover: "soft", 
            numberOfPages: 134, 
            author: "Johann Wolfgang von Goethe", 
            description: "Faust to dramat niemieckiego poety, polityka, uczonego Johanna Wolfganga von Goethego w dwóch częściach."
        },
        {
            id: 4,
            name: "Pan Tadeusz, czyli ostatni zajazd na Litwie",
            cover: "hard", 
            numberOfPages: 210, 
            author: "Adam Mickiewicz", 
            description: "Poemat epicki Adama Mickiewicza wydany w dwóch tomach w 1834 w Paryżu"
        },
        {
            id: 5,
            name: "Moby Dick",
            cover: "soft", 
            numberOfPages: 186, 
            author: "Herman Melville", 
            description: "Powieść amerykańskiego pisarza, uznawana jest za jedno z arcydzieł literatury światowej i klasykę literatury amerykańskiej"
        },
        {
            id: 6,
            name: "Dżuma",
            cover: "hard", 
            numberOfPages: 321, 
            author: "Albert Camus", 
            description: "Powieść paraboliczna Alberta Camusa wydana w 1947 w Paryżu",
        }
    ]);
  
    return (
      <BooksContext.Provider value={{ bookList, setBookList }}>
        {children}
      </BooksContext.Provider>
    );
  };