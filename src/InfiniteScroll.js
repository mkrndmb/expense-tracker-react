import React , {useEffect, useState} from 'react'


export const InfiniteScroll = () =>{

    const [query,setQuery] = useState('harry')
    const [page,setPage] = useState(1)
    const [data,setData] = useState([])

    const url = `https://openlibrary.org/search.json?q=${query}&page=${page}`
    

    useEffect(()=>{
        console.log('render');
        fetch(url)
        .then(res=>res.json())
        .then(d=>{
            setData(old=>old =d.docs)
            console.log(data);
        })  
        

 },[query])

    function handleChange(e){
        setQuery(e.target.value)
    }

    return (
        <>
        <input type='text' onChange={handleChange} value={query}/>
{data.map(data=>(
    <div onScroll={() => onScroll()} ref={listInnerRef}>
    <div>{data.title}</div>
    </div>
))}
        
        </>
    )
}