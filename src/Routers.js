import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import { NoteDetailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element = {<Home/>}/>
                <Route path='/notes/:noteId' element = {<NoteDetailPage/>}/>
                <Route path='*' element = {<NotFoundPage/>}/>
            </Routes>
        </Router>
    )
}