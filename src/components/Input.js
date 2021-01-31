import React, { useState, useContext } from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Input = () => {

   

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

    const {addItem} = useContext(GlobalContext)


    const onSubmit = (e) => {
        e.preventDefault();
       
        const newTrans={
            id:Date.now(),
            text,
            amount:+amount
     } 
     addItem(newTrans)
     console.log(newTrans);
    }

    return (
        <>
            <div className='title'>
                <h1>Expense Tracker</h1>
            </div>
            <div className='content'>
                <h3>Add New Transaction</h3>
                <form onSubmit={onSubmit} className='form'>
                    <div className="input">
                        <label style={{marginLeft:"1.6em"}}>Text</label>
                        <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="where u hav spent ..." />
                    </div>
                    <div className="input">
                        <label>Amount</label>
                        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="how much ..." />
                    </div>
                    <button onClick={onSubmit} style={{paddingLeft:'3px'}}>Add +</button>
                </form>
            </div>
        </>
    )
}