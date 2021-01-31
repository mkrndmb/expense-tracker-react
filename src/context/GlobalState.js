import React , {createContext,useReducer} from 'react'
import {Reducer} from './Reducer'

const initialState={
    transactions:JSON.parse(localStorage.getItem('transactions')) || []
}

//context

export const GlobalContext = createContext(initialState)


//provider comp.

export const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(Reducer,initialState)
    
    //actions
    
    function deleteItem(id){
    dispatch({
        type:'DELETE',
        payload:id
    })
    }
    function addItem(transaction){
        dispatch({
            type:'ADD',
            payload:transaction
        })
   
    }
    function removeFromlocalStore() {
        localStorage.clear()
        
    }
    return (
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                deleteItem,
                addItem,
                removeFromlocalStore
                }}>
            {children}
            </GlobalContext.Provider>
    )
}

