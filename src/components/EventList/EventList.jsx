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
    <div className='description'>
      <div className='welcome'>Welcome to Encore</div>
      <p className='subhead'>
        React's Premiere Concert/Show Venue <br />
      </p>
      <p className='address'> 
        1108 SEIR Lane <br />
        Remote, Tx 11010 <br />
        P. 123-456-7890
      </p>
    </div>
    <main className="EventList">
      {eventItems}
    </main>
    </>
  );
}