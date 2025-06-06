import { createContext, useEffect, useReducer } from "react";  

const reduce = (state, action) => {
    switch(action.type){
        case "ADD_BOOK":
            return [...state, action.payload];
        case "REMOVE_BOOK":
            return state.filter( (it) => it.id !== action.payload.id );
    }
}

const FavouriteContext = createContext();

export const FavouriteProvider = ({children}) => {
    const [state, dispatch] = useReducer(reduce, []);

    useEffect(() => {
        const favourites = localStorage.getItem("favouriteBooks");
        if(favourites === null) return;
        const favouritesDecoded = JSON.parse(favourites);
        favouritesDecoded.forEach(book => {
            dispatch({type: "ADD_BOOK", payload: book});
        })
    }, []);

    useEffect(() => {
        localStorage.setItem("favouriteBooks", JSON.stringify(state));
    }, [state]);
    
    return <FavouriteContext.Provider value={{
        state, 
        dispatch
    }}
    >   
        {children}
    </FavouriteContext.Provider>
};

export default FavouriteContext;