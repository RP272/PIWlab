const { createContext, useReducer } = require("react");

const initState = [];

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
    const [state, dispatch] = useReducer(reduce, initState);
    return <FavouriteContext.Provider value={{
        state, 
        dispatch
    }}
    >   
        {children}
    </FavouriteContext.Provider>
};