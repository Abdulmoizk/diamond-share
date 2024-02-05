import { useState } from 'react'
import './pages/home/css/Style.scss'
import AppRouter from './config/Router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRouter/>
    </>
  )
}

export default App
