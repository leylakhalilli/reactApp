import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
export default function Main() {
    const handleClick = useNavigate()
    return (
        <>
            <Navbar />
            <h1>Main</h1>
            <button onClick={()=>{
                handleClick("/service")
            }}>Click</button>
        </>
    )
}