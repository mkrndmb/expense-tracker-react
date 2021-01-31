import React,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'

export const DebitCredit = () => {

    const {transactions} = useContext(GlobalContext)

    const credit =  transactions.map(t=>t.amount).filter(t=>t>0).reduce((sum,t)=>sum+=t,0)
     
    const debit = transactions.map(t=>t.amount).filter(t=>t<0).reduce((sum,t)=>sum-=t,0)

  return (
    <div className="dcBody">
        <div style={{textAlign:'center'}}>
          <h4>Credited</h4>
            <p className="credit">&#8377;{credit}</p>
        </div>
        <div style={{textAlign:'center'}}>
          <h4>Debited</h4>
            <p className="debit">&#8377;{debit}</p>
        </div>
      </div>
  )
}