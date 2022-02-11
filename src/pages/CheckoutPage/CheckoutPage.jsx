import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import * as eventsAPI from '../../utilities/events-api'


function CheckoutPage({ }) {
    const [cart, setCart] = useState({tickets:[]})
    // const [eventItems, setEventItems] = useState([]);
    const navigate = useNavigate();


    


    async function handleCheckout() {
        await ordersAPI.checkout();
        navigate('/events');
    }

    


    useEffect(function () {
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
        }
        getCart();

        // async function getEvents() {
        //     const events = await eventsAPI.getAll();
        //     setEventItems(events);
        //     // console.log(events)
        //   }
        //   getEvents();

    }, [])

    return (
        <div>
            {/* {eventItems.map(event => 
            <div 
            key={event._id}
            >
                {event.name}    
            </div>
            )} */}
            {cart.tickets.map(ticket => 
            <div 
            key={ticket._id}
            >
                {/* {ticket.table} */}
                {ticket.seat}
                $ {ticket.price}
                
            </div>
            )}
            <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!cart.tickets.length}
                >
                CHECKOUT
                </button>
        </div>
    )
}

export default CheckoutPage;