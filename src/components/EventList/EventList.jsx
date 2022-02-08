import EventListItem from '../EventListItem/EventListItem';

export default function EventList({events}) {
  const eventItems = events.map(event =>
    <EventListItem
      key={events.id}
      event={event}
    />
  );
  console.log(events)
  return (
    <main className="EventList">
      {eventItems}
    </main>
  );
}