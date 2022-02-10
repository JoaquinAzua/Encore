import '../TicketsForTables/TicketsForTables.css'



export default function Tickets({ticket, handleAddToCart}) {
    return (
        <div className="ticketitems">
            <div className='seat'>Seat:{ticket.seat}</div>
            <div className='price'>${ticket.price}</div>
            <button className='' onClick={() => handleAddToCart(ticket._id)}>Add to cart</button>
        </div>
    )
}