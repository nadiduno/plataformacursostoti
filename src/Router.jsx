import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
// import { Course } from './Pages/Course'
import { Lesson } from './Pages/Lesson'
import { VideoLesson } from './components/VideoLeson'
// import { LessonList } from './components/LessonList'

export function Router() {
    return (
        <Routes >
            <Route path='/' element={<Lesson />} />
            <Route path="/curso" element={<VideoLesson />} />
        </Routes>
    )
}   