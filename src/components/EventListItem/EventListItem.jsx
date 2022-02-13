import './EventListItem.css'
import { Link } from 'react-router-dom'


export default function EventListItem({event}) {
    var date = new Date(event.date);  
    var d = date.toLocaleString();

    return (
        <div className="EventListItem">
            
            <div className="image "><img src={event.image} /></div>
            <div className="name"><span>{event.name} <hr /> Saturday {d}</span></div>
            <div className="buy">
                <span></span>
                <button className="buttn" >
                    <Link to="/tables">See Tickets </Link>
                </button>
            </div>
        </div>
    )
}