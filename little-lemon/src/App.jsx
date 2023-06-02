import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
function App() {


  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Main/>}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>


    </>
  )
}

export default App
