// Dependencies
import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Sandbox from './pages/Sandbox';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route key={0} exact path={'/'} element={<Home />} />
                {process.env.NODE_ENV === 'development' && (
                    <Route key={999999999} path={'/sandbox'} element={<Sandbox />} />
                )}
            </Routes>
        </>
    )
}

export default AppRoutes