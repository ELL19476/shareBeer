import React from 'react';
import { Link } from "react-router-dom";

class Requests extends React.Component {
    render() {
      return (
        <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/settings">Settings</Link>
            </li>
            <li>
                <Link to="/requests">Requests</Link>
            </li>
        </ul>
        </nav>
        );
    }
}

export default Requests