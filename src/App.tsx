import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';

// Layout
import PageLayout from './components/PageLayout';

// pages
import HomePage from './pages';
import MCDetail from './pages/mc-detail';

import './App.css';

function App() {

    return (

        <Router>
            <Routes>
                <Route path="/" element={(<PageLayout children={<Outlet />} />)} >
                    <Route path="/" element={<HomePage />} />
                    <Route path="/mc-detail/:id" element={<MCDetail />} />
                </Route>
            </Routes>
        </Router>

    )
}

export default App
