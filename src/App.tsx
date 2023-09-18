import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { App as AppAntd } from 'antd';
// Layout
import PageLayout from './components/PageLayout';

// pages
import HomePage from './pages';
import MCDetail from './pages/mc-detail';
import OrderDetail from './pages/order-detail';

import './App.css';

function App() {

    return (
        <AppAntd>
            <Router>
                <Routes>
                    <Route path="/" element={(<PageLayout children={<Outlet />} />)} >
                        <Route path="/" element={<HomePage />} />
                        <Route path="/mc-detail/:id" element={<MCDetail />} />
                        <Route path="/order-detail" element={<OrderDetail />} />
                    </Route>
                </Routes>
            </Router>
        </AppAntd>

    )
}

export default App
