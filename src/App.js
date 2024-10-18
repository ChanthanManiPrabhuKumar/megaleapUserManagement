import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  let [user, setUser] = useState(null)
  let [input, setInput] = useState("")


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => {setUser(data)
      console.log(data)
    })
  },[user])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/:${input.id}`)
    .then(response => response.json())
    .then(data => {setInput(data)
      console.log(data)
    })
  },[input])

  return (
    <>
    <input type='text' onChange={(e) => {
      setInput(e.target.value)
    }}/>
{

  input === "" ? user.map((item,index) => {
    return (
      <div className="App-card">
    <h1 key={index}>{item.name}</h1>
     <h2 key={index}>{item.email}</h2>
    <h2 key={index}>{item.company.name}</h2>
    </div>
    
  )
  }) :
  input.map((data,index) => {
    return (
      <div className="App-card">
    <h1>{data.name}</h1>
     <h2>{data.email}</h2>
    <h2>{data.company.name}</h2>
    </div>
    )
  })
} 

    </>
  );
}

export default App;
