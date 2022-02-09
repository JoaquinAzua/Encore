import { useState, useEffect } from 'react';
import * as eventsAPI from '../../utilities/events-api';
import EventList from '../../components/EventList/EventList';
// import EventListItem from '../../components/EventListItem/EventListItem';
 
// import { Link } from 'react-router-dom'
// import UserLogOut from '../../components/UserLogOut/';


export default function EventsPage({ user, setUser }) {
  const [eventItems, setEventItems] = useState([]);

  useEffect(function () {
    async function getEvents() {
      const events = await eventsAPI.getAll();
      setEventItems(events);
      console.log(events)
    }
    getEvents();
  
  }, [])
    return (
      <main className="EventsPage"> 
        <EventList 
          key={eventItems._id}
          events={eventItems}
        />
      </main>
    );
  }