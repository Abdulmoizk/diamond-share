import{BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/home';
import PageNotExist from '../pages/home/pagenotexists';

function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            {/* <Route path="tutorial" element={< />} />
            <Route path="/login" element={< />} />
            <Route path="/signup" element={< />} /> */}
            <Route path="*" element={<PageNotExist />} />
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter