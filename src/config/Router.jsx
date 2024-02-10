import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from '../pages/home';
import PageNotExist from '../pages/home/pagenotexists';
import RegisterPage from '../pages/Signup';
import LoginPage from '../pages/Login';
import TutorialPage from '../pages/Tutorial';
import FeedbackPage from '../pages/Feedback';
import { auth, onAuthStateChanged } from './db/Firebase';
import { useState } from 'react';

function AppRouter() {
    const [user, setUser] = useState(false)
    onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
            console.log(uid);
            setUser(true);
        } else {
            setUser(false);
        }
      });
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