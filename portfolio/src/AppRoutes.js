// Dependencies
import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Sandbox from './pages/Sandbox';

const AppRoutes = () => {
    const environment = process.env.NODE_ENV;
    const sandbox = environment === 'development' ? <Route key={999999999} path={'/sandbox'} element={<Sandbox />} /> : null;
    return (
        <>
            <Routes>
                <Route key={0} exact path={'/'} element={<Home />} />
                <Route key={1} path={'/about'} element={<About />} />
                {sandbox}
            </Routes>
        </>
    )
}

export default AppRoutes