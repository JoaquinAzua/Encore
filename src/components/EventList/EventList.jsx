import './EventList.css'
import EventListItem from '../EventListItem/EventListItem';

export default function EventList({events}) {
  const eventItems = events.map(event =>
    <EventListItem
      key={event._id}
      event={event}
    />  
  );
  // console.log(events)
  return (
    <>
    <div>Encore</div>
    <main className="EventList">
      {eventItems}
    </main>
    </>
  );
}