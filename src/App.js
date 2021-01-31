import React from 'react'
import { Input } from './components/Input';
import './App.css';
import { TransList } from './components/TransList';
import { DebitCredit } from './components/DebitCredit';
import { Total } from './components/Total';
//import {NumbersAPI} from './NumbersAPI'
//import {InfiniteScroll} from './InfiniteScroll'
import {GlobalProvider} from './context/GlobalState'

const App = ()=> {


return (
  <>
  <GlobalProvider>
  <Input/>
  <TransList/>
  <DebitCredit/>
  <Total/>
  </GlobalProvider>
  {/* <NumbersAPI/> */}
  {/* <InfiniteScroll/> */}
  </>
)
  
}

export default App;
