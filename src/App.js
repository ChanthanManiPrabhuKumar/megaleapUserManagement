
import React, { useState, useEffect } from 'react';
import './App.css'
const MyComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [input, setInput] = useState("");
  const [inputdata,setInputdata]= useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log(input)
    const inputdatas = data.filter((item) => {
      if((item.name.toLowerCase().includes(input.toLowerCase()) == true) || (item.email.toLowerCase().includes(input.toLowerCase()) == true)){
        return true
      }
    })
    setInputdata(inputdatas)
    console.log(inputdata)
  },[input])


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
<>
    <input type='text' onChange={(e) => {
      setInput(e.target.value)
    }}/>
{

  input === "" && inputdata.length == 0 ? data.map((item) => {
    return (
    <div id="App-card">
    <h1 key={item.id}>Name : {item.name}</h1>
    <h2 key={item.id}>Email : {item.email}</h2>
    <h2 key={item.id}>Company : {item.company.name}</h2>
    </div>
    
  )
  }) :
  inputdata.map((data) => {
    return (
    <div id="App-card">
    <h1>{data.name}</h1>
     <h2>{data.email}</h2>
    <h2>{data.company.name}</h2>
    </div>
    )
  })
} 

    </>
  );
};

export default MyComponent;
