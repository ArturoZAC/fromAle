import React, { useEffect, useState } from 'react'
import './App.css'
import photooff from './photos/Alelittle.jpeg'

function App() {

  const [size, setSize] = useState(26);
  const [height, setHeight] = useState(65);
  const [width, setWidth] = useState(100)
  const [cont, setCont] = useState(0)
  const [photo, setPhoto] = useState(true)

  
  const handleUppsize = () =>{
      const btn1 = document.querySelector('.btn1');
      btn1.style.fontSize = `${size}px`;
      btn1.style.height = `${height}px`;
      btn1.style.width = `${width}px`;
      setSize(size + 16)
      setHeight(height + 15)
      setWidth(width + 30)
      setCont(cont + 1);
    }

    const handlePhoto = () => {
      setPhoto(false)
    }
    
    console.log(cont)

  return (

    photo ? (
    <div className='container'>
      <h2>Quien es la niña mas Hermosa? 🥺💖</h2>
      <div className='containerpic'>
      <div className='bears'></div>
      {
        cont > 6 && <div>Jijiji💝</div>
      }
      </div>
      <div className='botones'>
        <button onClick={handlePhoto} className='btn1' type="button">Ale</button>
        {
          cont < 7 ?           
          <button onClick={handleUppsize} type="button">La Otra</button> :
          <></>
        }
      </div>
    </div>
    )
    :
    <div className='container'>
      <div className='offAle'>
        <h1>Te amo mucho mi bebita 💖</h1>
        <div>
          <img src={photooff} alt="photo" />
        </div>
      </div>
    </div>

  )
}

export default App
