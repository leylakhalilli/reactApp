import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function About() {
    const handleRoute = useNavigate()

    return (
        <>
            <Navbar />
            <h1>About Page</h1>
            <button onClick={() => handleRoute('/list')}>List</button>
        </>
    )
}