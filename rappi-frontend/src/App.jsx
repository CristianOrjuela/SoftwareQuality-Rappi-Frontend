import { useState } from 'react'
import Header from './components/Header'
import BodyComponent from './components/BodyComponent'
import Footer from './components/Footer'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <BodyComponent />
      <Footer />
    </>
  )
}

export default App
