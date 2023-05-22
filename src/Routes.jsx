import { Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Calendar from './pages/Calendar'
import Dashboard from './pages/Dashboard'

export default function () {
    return (
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/login' element={<Login />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
    )
}