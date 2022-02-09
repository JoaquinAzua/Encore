import './EventListItem.css'
import { Link } from 'react-router-dom'


export default function EventListItem({event}) {
    return (
        <div className="EventListItem">
            <div className="image flex-ctr-ctr"></div>
            <div className="name">{event.name} <br />{event.genre}</div>
            <div className="date">Saturday {event.date}</div>
            <div className="buy">
                <span></span>
                <button className="btn-sm" >
                    <Link to="/tables">See Tickets</Link>
                </button>
            </div>
        </div>
    )
}