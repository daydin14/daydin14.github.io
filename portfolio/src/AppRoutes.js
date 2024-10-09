// Dependencies
import React from 'react'
import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home';

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route key={0} exact path={'/'} element={<Home />} />
            </Routes>
        </>
    )
}

export default AppRoutes