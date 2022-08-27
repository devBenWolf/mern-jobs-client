import {useState, useReducer, useContext, createContext} from "react"

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: '',
    alertType: ''
}

export const AppContext = createContext()
const AppContextProvider = ({children}) => {
    const [state, setState] = useState(initialState)

    return (
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}


export {AppContextProvider}

