import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/sobre'>sobre</Link>
                    </li>
                    <li>
                        <Link to='/regras'>regras</Link>
                    </li>
                    <li>
                        <Link to='/ajuda'>ajuda</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

