
function OrderHistoryPage({order}){
    

    return  (
        <>
        <span>Purchased on: {new Date(order.updatedAt).toLocaleDateString()}</span>
        {order.tickets.map(ticket =>
                    <div 
                        key={ticket._id}
                    >
                        Seat: {ticket.seat} - 
                         ${ticket.price}
                    </div>
                )}
        <span className="right">Order Total: ${order.orderTotal}</span> <br />
        </>
        )
}

export default OrderHistoryPage;