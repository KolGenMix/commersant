import React from "react"
import {
    BrowserRouter as Router, Routes, Route
} from "react-router-dom"
import NavBar from "../layout/NavBar/navbar"
import Main from "../../pages/main-page/main-page"
import Login from "../../pages/public-pages/auth/login-page/login-page"
import Reg from "../../pages/public-pages/auth/reg-page/reg-page"



const Content = () => {
    return (
        <div className="container">

            <Router>
                <NavBar />

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reg" element={<Reg />} />
                </Routes>

            </Router>
        </div>
    )
}

export default Content