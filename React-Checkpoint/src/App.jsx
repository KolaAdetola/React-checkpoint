import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Name from './componenent/Name'
import Price from './componenent/Price'
import Img from './componenent/Img'
import Desc from './componenent/Desc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-full h-screen flex justify-center bg-gray-300 items-center">
        <div className="border-2 border-black rounded-md w-[400px]  bg-white flex flex-col  p-4 ">
          <Img/>
          <Name/>
          <Price/>
          <Desc/>
        </div>
      </div>
    </>
  )
}

export default App
