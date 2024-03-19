import { Route, Routes} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavouritesPage from './pages/Favourites';

function App() {
    // localhost:3000/
    // my-page.com

    return (
        <div>
            <Routes>
                <Route path="/"
                    element={<AllMeetupsPage />} />
                <Route path="/new-meetup" 
                    element={<NewMeetupPage />} />
                <Route path="/favourites" 
                    element={<FavouritesPage />} />
            </Routes>
        </div>
    );
}

export default App;
 