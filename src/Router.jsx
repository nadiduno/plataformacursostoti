import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
// import { Course } from './Pages/Course'
import { Lesson } from './Pages/Lesson'
import { VideoLesson } from './components/VideoLesson'
// import { LessonList } from './components/LessonList'

export function Router() {
    return (
        <Routes >
            <Route path='/' element={<HomePage />} />
            <Route path='/registro-aula' element={<Lesson />} />
            <Route path="/curso-aula" element={<VideoLesson />} />
        </Routes>
    )
}   