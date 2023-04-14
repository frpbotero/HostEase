import { Route, Routes } from 'react-router-dom'
import App from './App'

export default function () {
    return (
        <Routes>
            <Route path='/teste' element={<App />} />
        </Routes>
    )
}