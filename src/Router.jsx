import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Course } from './Pages/Course'
import { Lesson } from './Pages/Lesson'
import { Login } from './pages/Login'

export function Router() {
    return (
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path="/curso" element={<Course />} />
            <Route path='/aula' element={<Lesson />} />
        </Routes>
    )
}   