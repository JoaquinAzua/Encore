import '../TicketsForTables/TicketsForTables.css'



export default function Tickets({ticket}) {
    return (
        <div className="ticketitems">
            <div className='seat'>Seat:{ticket.seat}</div>
            <div className='price'>${ticket.price}</div>
            <button>Add to cart</button>
        </div>
    )
}