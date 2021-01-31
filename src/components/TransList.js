import React ,{useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'


export const TransList = () => {

    
    const {transactions} = useContext(GlobalContext)
    const {removeFromlocalStore} = useContext(GlobalContext)
    console.log(transactions);
    return (
        <>
            <div className='transBody'>
                <h3 >Transactions</h3>
                <ul className="list" style={ transactions.length>0 ? {overflowY :"scroll"} :{overflowY :"hidden",height:'0'}}>
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                </ul>
                <button type='button' onClick={()=>{removeFromlocalStore();window.location.reload();}} style={ transactions.length===0 ? {visibility:'hidden'} :{visibility:'visible'}} >Clear</button>
            </div>
        </>
    )
}





 const Transaction = ({ transaction }) => {
const {deleteItem} = useContext(GlobalContext)
  return (
    <li className='sublist' key={transaction.id} onDoubleClick={()=>deleteItem(transaction.id)}><span className="tooltiptext">DblClk to delete</span>
      {transaction.text} <span style={{marginLeft:'10em',marginRight:'10px'}}>{transaction.amount} </span>
    </li>
  )
}