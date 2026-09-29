import { useState } from 'react'
import './App.css'

function App() {
 
  const [color, setColor] = useState('green');

  function colorChanger(bgColor){
      setColor(bgColor)
  };

  return (
    <>
      <div className='w-full h-screen'
      style={{backgroundColor:color}}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center bg-white gap-3 shadow-lg py-2 px-3 rounded-2xl'> 
            
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>colorChanger('red')} style={{backgroundColor: "red"}}>Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>colorChanger('blue')} style={{backgroundColor: "blue"}}>Blue</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>colorChanger('black')} style={{backgroundColor: "black"}}>Black</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>colorChanger('olive')} style={{backgroundColor: "olive"}}>Olive</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg' onClick={()=>colorChanger('green')} style={{backgroundColor: "green"}}>Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>colorChanger('orange')} style={{backgroundColor: "orange"}}>Orange</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>colorChanger('yellow')} style={{backgroundColor: "yellow"}}>Yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-black shadow-lg' onClick={()=>colorChanger('white')} style={{backgroundColor: "white"}}>White</button>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
