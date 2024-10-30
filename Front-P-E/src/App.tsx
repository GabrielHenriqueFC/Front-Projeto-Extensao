
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Rotas/Login'
import Enter from './Rotas/Enter'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Enter/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<h1>Page Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
