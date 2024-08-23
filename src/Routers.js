import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Options} from './pages/options';
import {Contact} from './pages/contact';
// import { NoteDetailPage } from './pages/NoteDetailPage';
// import { NotFoundPage } from './pages/NotFoundPage';

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element = {<Home/>}/>
                <Route path='/options' element = {<Options/>}/>
                <Route path='/contact' element = {<Contact/>}/>
                {/* <Route path='/notes/:noteId' element = {<NoteDetailPage/>}/> */}
                {/* <Route path='*' element = {<NotFoundPage/>}/> */}
            </Routes>
        </Router>
    )
}