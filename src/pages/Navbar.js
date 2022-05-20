import React from "react";
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <nav
            style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem",
            }}
        >

            <Link to="/">Main</Link>{' '}
            <Link to="/list">List</Link>{' '}
            <Link to="/about">About</Link>{' '}
            <Link to="/service">Service</Link>{' '}
         

        </nav>
    )
}