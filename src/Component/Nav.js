import { NavLink } from "react-router-dom";


export default function Nav() {


    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <NavLink class="nav-link active" to="/login">Login</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/register">Register</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>
        </ul>
    )
}