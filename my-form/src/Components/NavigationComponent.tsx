import {Link} from "react-router-dom";

const NavigationComponent = () => {
    return (
        <nav className="flex flex-wrap justify-end items-center">
            <ul className="flex flex-wrap text-center m-0 p-0">
                <li>
                    <Link to="/" className="flex flex-wrap text-center relative mx-3">Home</Link>
                </li>
                <li>
                    <Link to="/Register" className="flex flex-wrap text-center relative mx-3">Register</Link>
                </li>
                <li>
                    <Link to="/FormLogin" className="flex flex-wrap text-center relative mx-3">Login</Link>
                </li>
                <li>
                    <Link to="/Dashboard" className="flex flex-wrap text-center relative mx-3">Dashboard</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavigationComponent;