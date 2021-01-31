

export const Reducer= (state,action)=>{
    switch(action.type){
        case 'DELETE':
            return{
                ...state, 
                transactions:state.transactions.filter(t=>t.id !== action.payload)
            }
            case 'ADD':
                localStorage.setItem('transactions', JSON.stringify([action.payload,...state.transactions]))
                return{
                    ...state, 
                    transactions:[action.payload,...state.transactions]
                }
        default: return state;
    }

}