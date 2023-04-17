import { Link } from "react-router-dom"
import '../index.css'
import './css/style.css'

export default function Nav() {
    return (
        <div id="menu">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/empresa">Empresa</Link>
                </li>
                <li>
                    <Link to="/contato">Contato</Link>
                </li>
                <li>
                    <Link to="/api">API</Link>
                </li>
            </ul>
        </div>
    )
}