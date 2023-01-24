import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './layout/footer'
import Header from './layout/header'
import Addpage from './pages/add-pages'
import Detail from './pages/details'
import Customers from './pages/dinamic-part'
import HomePage from './pages/home-page'
import LegalPart from './pages/legal-part'
import PracticeArea from './pages/practice-area'
import PracticeArea2 from './pages/practice-area-2'
import TopPart from './pages/top-part'
// import HomePage from './pages/home-page'

function App() {

  return (
    <div className="App">
   
     <Header/>
     <Routes>
      <Route  path='/' element={ <HomePage/> }/>
      <Route path='/add-pages' element={<Addpage/>}/> 
      <Route path='/home-page/:_id' element={<Detail/>}/> 
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
