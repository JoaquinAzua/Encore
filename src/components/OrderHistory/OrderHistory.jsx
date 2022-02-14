
function OrderHistoryPage({order}){
    

    return  (
        <>
        <br />
        <span>Purchased on: {new Date(order.updatedAt).toLocaleDateString()}</span> 
        {order.tickets.map(ticket =>
                    <div className="pastordersinfo" 
                        key={ticket._id}
                    >
                        Seat: {ticket.seat} - 
                         ${ticket.price}
                    </div> 
                )}
        <span className="pastorders">Order Total: ${order.orderTotal} </span>  <br />
        </>
        )
}

export default OrderHistoryPage;