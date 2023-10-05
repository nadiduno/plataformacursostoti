import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { Lesson } from './Pages/Lesson'
import { VideoLesson } from './pages/VideoLesson'


export function Router() {
    return (
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/registro-aula' element={<Lesson />} />
            <Route path="/curso-aula" element={<VideoLesson />} />
        </Routes>
    )
}   