import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Options} from './pages/options';
import {Contact} from './pages/contact';
import {Work} from './pages/work';
import { WorkDetail } from './pages/workDetail';
// import { NotFoundPage } from './pages/NotFoundPage';

export const Routers = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element = {<Home/>}/>
                <Route path='/options' element = {<Options/>}/>
                <Route path='/contact' element = {<Contact/>}/>
                <Route path='/work' element = {<Work/>}/>
                <Route path='/workDetail/:workName' element = {<WorkDetail/>}/>
                {/* <Route path='*' element = {<NotFoundPage/>}/> */}
            </Routes>
        </Router>
    )
}