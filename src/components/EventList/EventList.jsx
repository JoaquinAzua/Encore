import EventListItem from '../EventListItem/EventListItem';

export default function EventList({  }) {
  const items = menuItems.map(item =>
    <EventListItem />
  );
  return (
    <main className="EventList">
      {items}
    </main>
  );
}