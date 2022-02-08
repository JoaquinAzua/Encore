export default function EventListItem({event}) {
    return (
        <div className="EventListItem">
            <div className="image flex-ctr-ctr"></div>
            <div className="name"></div>
            <div className="buy">
                <span></span>
                <button className="btn-sm" >
                {event.name}
                </button>
            </div>
        </div>
    )
}