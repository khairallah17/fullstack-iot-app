import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Home'
import Register from './pages/Register'
import ProtectedRoute from './components/ProtectedRoute'
import Devices from "./pages/Devices"
import Settings from './pages/Settings'
import Consumption from './pages/Consumption'
import { AuthProvider } from './context/AuthProvider'
import { GlobalContextProvider } from './context/GlobalContext'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <GlobalContextProvider>
        <AuthProvider>  
          <Routes>
            <Route path="/" element={<ProtectedRoute/>}>
              <Route path='/home' element={<Dashboard />} />
              <Route path='/devices' element={<Devices />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/consumption' element={<Consumption/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Register/>} />
          </Routes>
        </AuthProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  )
}

export default App
