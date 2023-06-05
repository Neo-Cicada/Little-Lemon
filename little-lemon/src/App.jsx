import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/menu/Menu'
import Reservation from './components/reservation/Reservation'
function App() {


  return (
    <>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='Menu' element={<Menu/>}/>
          <Route path='Reservation' element={<Reservation/>}/>
        </Routes>
      </main>
      {/* <footer>
        <Footer/>
      </footer> */}


    </>
  )
}

export default App
