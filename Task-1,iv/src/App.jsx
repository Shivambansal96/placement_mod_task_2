import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [name, setName] = useState('')
  const [price, setPrice] = useState()
  const [data, setData] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)


  const clickHandler = () => {

    setData([...data, `${name} - ${Number(price)}`])

    console.log(`data`, data);

    setTotalPrice(previous => previous + Number(price))

    setName('')
    setPrice('')
  }


  return (
    <div id='App'>

        <div id="content">
          <h1>Task Four</h1>

          <p>Storing the input data with Product Name and Product Price as an object into array, displaying that list data, calculating total Product Price using javascript.</p>

          <label>Product Name*</label>
          <input type="text" onChange={(e)=> setName(e.target.value)} value={name} />
<br /><br />
          <label>Product Price*</label>
          <input type="number" name="" id="" value={price} onChange={(e) => setPrice(e.target.value)} />

          <button type="submit" onClick={clickHandler}>Submit</button>

          <br />

          <h1>Output Result: </h1>

          <div>  
            <h2>Sale Price</h2>

            <span>
            <ul>{data.map((item, index) => {
                return(
                  <li key={index}>{item}</li>
                )
              })}</ul>

              </span>
          </div>

          <div>
            <span>
              <h2>Total Price</h2>

              {/* <p>{totalPrice ? totalPrice : ''}</p> */}
              {totalPrice == 0 ? '' : <p style={{textAlign: 'center'}}>💵 {totalPrice}</p> }
            </span>
          </div>

        </div>
      
    </div>
  )
}

export default App
