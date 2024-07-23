import { Link } from "react-router-dom";

export default function Ajuda() {
    return(
        <div>
            <h1>ajuda</h1>
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