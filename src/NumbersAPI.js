import React, { useEffect, useState } from 'react'


export const NumbersAPI = () => {


  const [count, setCount] = useState(0)
  const [apiData, setApiData] = useState({ data: null, loading: true })
  //http://numbersapi.com/${count}/trivia
  useEffect(() => {
    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: 'user', pass: 'pass'
      })

    }).then(res => res.json()).then(data => console.log({data}))


  }, [count])

  return (
    <>
      <div>
        {!apiData.loading && <h1>{apiData.data}</h1>}
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  )
}