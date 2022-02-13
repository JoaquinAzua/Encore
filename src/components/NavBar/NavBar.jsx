import { Link } from "react-router-dom";
import './NavBar.css'
import * as userService from "../../utilities/users-service";

function NavBar({ user, setUser, cart }) {
    function handleLogOut() {
        // Delegate to the users-service
        userService.logOut();
        // update state will also cause a rerender 
        setUser(null);
    }
    return (
        <div>
            {/* <div className="name">ENCORE</div>  <hr /> */}
            <nav>
                <span>Welcome, {user.name}!</span>
                &nbsp; | &nbsp;
                <div class="dropdown">
                    <span>Hours Of Operation</span>
                    <div class="dropdown-content">
                        <p>MON. 11AM-6PM</p>
                        <p>TUES. 11AM-6PM</p>
                        <p>WED. 11AM-CLOSE</p>
                        <p>THUR. 11AM-CLOSE</p>
                        <p>FRI. 11AM-CLOSE</p>
                        <p>SAT. 11AM-CLOSE</p>
                        <p>SUN. 12PM-6PM</p>
                    </div>
                    &nbsp; | &nbsp;
                </div>
                <Link to="/events">Concerts & Events</Link>
                &nbsp; | &nbsp;
                <Link to="" onClick={handleLogOut}>Log Out</Link>
                &nbsp; | &nbsp;
                <Link to="/orders/cart/checkout" className="fa fa-shopping-cart" >&nbsp;{cart.tickets && cart.tickets.length}</Link>
            </nav> 
            <div className='footerinfo'>
                
                
            </div>
        </div>
    )
}

export default NavBar;