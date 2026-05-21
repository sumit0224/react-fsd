
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <div>
                <Link to={"/"}>home</Link>
                <Link to={"/login"}>login</Link>
                <Link to={"/about"}>about</Link>
                <Link to={"/service"}>service</Link>

            </div>
        </div>
    )
}

export default Navbar
