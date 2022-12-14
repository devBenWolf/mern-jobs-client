import {useReducer, useContext, createContext} from "react"
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions"
import reducer from "./reducer"

const initialState = {
    isLoading: false,
    showAlert: true,
    alertText: '',
    alertType: ''
}

const AppContext = createContext()
const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const displayAlert = () => {
        dispatch({type: DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = () => {
        setTimeout(() => {
            dispatch({type: CLEAR_ALERT})
        }, 3000)
    }


    return (
        <AppContext.Provider value={{...state, displayAlert}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppContextProvider, useAppContext, initialState}

