import {BrouserRouter as Router, Switch, Route} from 'react-router-dom';
import {NotesPage} from './pages/NotesPage';
import { NoteDeatailPage } from './pages/NoteDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <NotesPage/>
                </Route>
                <Route path='/notes/:noteId'>
                    <NoteDeatailPage/>
                </Route>
                <Route>
                    <NotFoundPage/>
                </Route>
            </Switch>
        </Router>
    )
}