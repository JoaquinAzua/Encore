import './EventListItem.css'
import { Link } from 'react-router-dom'


export default function EventListItem({event}) {
    var date = new Date(event.date);  
    var d = date.getDate();
    var m = date.getMonth()+1;
    var y = date.getFullYear();

    return (
        <div className="EventListItem">
            <div className="image flex-ctr-ctr"></div>
            <div className="name">{event.name} <hr /> Saturday {m}/{d}</div>
            <div className="buy">
                <span></span>
                <button className="buttn" >
                    <Link to="/tables">See Tickets </Link>
                </button>
            </div>
        </div>
    )
}