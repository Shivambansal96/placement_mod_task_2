import React, { useEffect, useState } from 'react'

const App = () => {

  const URL = 'https://dog.ceo/api/breeds/image/random'
  // const URL = 'https://cat-fact.herokuapp.com/#/cat/facts'

  const [images, setImages] = useState([]);

  const fetchImages = async () => {

    try {
     
    const res = await fetch(URL);
    const data = await res.json();
    const newImg = data.message;

    console.log(`res`, newImg);
    setImages([newImg])
    // setImages

    console.log(`images`, images);
 
    } catch (error) {
      console.log(`error`, error);
    }
  }

    // useEffect(() => {
    //   fetchImages();
    // }, []);


  return (
    <div id='App'>

        <div id="content">

            <div id="imageContainer">
              <img src={images} alt="dog" />
            </div>
            <div id="buttonContainer">
              <button onClick={fetchImages}>Fetch Images</button>
            </div>

        </div>

    </div>
  )
}

export default App
