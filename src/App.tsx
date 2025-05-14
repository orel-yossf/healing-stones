
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import ProductPage from './pages/ProductPage'
import { Toaster } from 'react-hot-toast'
function App() {

  return (
    <>
      <BrowserRouter>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Navbar' element={<Navbar/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/ProductPage/:id' element={<ProductPage/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App




