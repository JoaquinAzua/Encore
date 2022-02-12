import { checkToken } from "../../utilities/users-service"

function OrderHistoryPage({order}){
    

    return  (
        <>
        {order.tickets.map(ticket =>
                    <div 
                        key={ticket._id}
                    >
                        {ticket.seat}
                        $ {ticket.price}
                    </div>
                )}
        {/* <div className="section-heading">
        {orders.isPaid ?
          <span>ORDER <span className="smaller">{orders.orderId}</span></span>
          :
          ""
        }
        <span>{new Date(orders.updatedAt).toLocaleDateString()}</span>
      </div> */}
        </>
        )
}

export default OrderHistoryPage;