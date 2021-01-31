import React ,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

export const Total = () => {
    
    const {transactions} = useContext(GlobalContext)

    const total = transactions.map(t=>t.amount).reduce((total,t)=>total+=t,0)
    
  return (
    <>  
        <div style={{textAlign:'center',margin:'1rem'}}>
        <h1>&#8377;{total}</h1>
        <h4>Total Balance</h4>
        </div>
    </>
  )
}