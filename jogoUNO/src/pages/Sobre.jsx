import { Link } from "react-router-dom";

export default function Sobre() {
    return(
        <div>
            <h1>sobre</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}