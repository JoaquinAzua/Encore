import * as ordersAPI from '../../utilities/orders-api';


function CheckoutPage({}){


    async function handleCheckout() {
        await ordersAPI.checkout();
        // navigate('/events');
      }

    return (
        <div>
            
        </div>
    )
}

export default CheckoutPage;