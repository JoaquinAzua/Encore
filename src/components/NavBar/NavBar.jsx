import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

function NavBar({user, setUser}){
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // update state will also cause a rerender 
        setUser(null);
    }
    return (
    <nav>
        <Link to="/events">Event Details</Link>
        &nbsp; | &nbsp;
        <Link to="/orders">Order History</Link>
        &nbsp; | &nbsp;
        <span>Welcome, {user.name}!</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
        &nbsp; | &nbsp;
        <Link to="/orders/checkout">Cart</Link>
    </nav>
    ) 
}

export default NavBar;