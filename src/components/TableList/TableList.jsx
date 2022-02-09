import './TableList.css'
import TableTickets from '../TableTickets/TableTickets'

export default function TableList({tables}) {
  const allTables = tables.map(table =>
    <TableTickets
      key={table._id}
      table={table}
    />
  );
  console.log(allTables)
  return (
    <>
      <div className='header'>Encore</div>
    <main className='flex'>
      <aside className='ticketinfo'>
        Tickets Display
      </aside>
      <div className="TableList">
        {allTables}
      </div>
    </main>
    </>
  );
}