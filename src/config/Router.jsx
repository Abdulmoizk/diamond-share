import{BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/home';
import PageNotExist from '../pages/home/pagenotexists';
import RegisterPage from '../pages/Signup';
import LoginPage from '../pages/Login';
import TutorialPage from '../pages/Tutorial';
import FeedbackPage from '../pages/Feedback';

function AppRouter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="tutorial" element={<TutorialPage />} />
            <Route path="feedback" element={<FeedbackPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="*" element={<PageNotExist />} />
        </Routes>
        </BrowserRouter>
    )
}
export default AppRouter