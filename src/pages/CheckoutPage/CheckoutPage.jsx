import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import * as eventsAPI from '../../utilities/events-api'
import OrderHistoryPage from '../../components/OrderHistory/OrderHistory';


function CheckoutPage({ }) {
    const [cart, setCart] = useState({ tickets: [] })
    const [orders, setOrders] = useState([]);
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

        async function fetchOrderHistory() {
            const orders = await ordersAPI.getOrderHistory();
            setOrders(orders);
            console.log(orders)
          }
          fetchOrderHistory();

    }, [])

    return (
        <>
            <div className='currentorder'>
                {cart.tickets.map(ticket =>
                    <div 
                        key={ticket._id}
                    >
                        Seat: {ticket.seat} -
                        ${ticket.price}
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
            <div>
                {orders.map(order =>
                    <OrderHistoryPage
                    order={order}
                    key={order._id}
                    />
                )}
            </div>
        </>
    )
}

export default CheckoutPage;