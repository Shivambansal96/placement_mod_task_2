import React, { useEffect, useState } from 'react'
import './App.css'

const App = () => {

  const [allAmounts, setAllAmounts] = useState([]) 
  const [currentAmount, setCurrentAmount] = useState()
  const [totalAmount, setTotalAmount] = useState(0)
  const [totalProfit, setTotalProfit] = useState(0)
  
  const clickHandler = () => {

    setAllAmounts([...allAmounts, currentAmount]);


    setTotalAmount(previous => previous + Number(currentAmount))
    setTotalProfit(previous => previous + Number(currentAmount) - 100)


  }

  console.log(allAmounts);


  return (
    <div id='App' >

      <h2>Task Three</h2>

      <p>Storing input textbox value into an array, displaying that array list, then calculating total sale price & total profit using Javascript</p>

      <p>Product Original Price: 100</p>

      <div>
        <p>Sale Price</p>
        <input type="number" name="" id="" value={currentAmount} onChange={(e) => setCurrentAmount(e.target.value)}/>
      </div>

      <button style={{backgroundColor: 'blue', marginTop: '10px'}} onClick={clickHandler}>Submit</button>

      <h3>Output Result: </h3>

      <h4>Sold Price List</h4>


        <ul>
          {allAmounts.map((item, index)=> {

            return (
              <li key={index}>{item}</li>
            )
          } )}
        </ul>


      <h4>Total Sold Price</h4>

        {totalAmount == 0 ? '' : <p>{totalAmount}</p>}      


      <h4>Total Profit</h4>

      <p>{totalProfit}</p>


      
    </div>
  )
}

export default App
