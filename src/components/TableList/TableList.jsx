import './TableList.css'
import { useState } from 'react';
import TableTickets from '../TableTickets/TableTickets'
import TicketsForTables from '../TicketsForTables/TicketsForTables'

export default function TableList({tables, tickets}) {
  const [selectedTable, setSelectedTable] = useState(null);

  const allTables = tables.map(table =>
    <TableTickets
      key={table._id}
      table={table}
      setSelectedTable={setSelectedTable}
    />
  );
  const allTickets = tickets.map(ticket =>
    <TicketsForTables
      key={ticket._id}
      ticket={ticket}
    />
  );
  if (selectedTable) {
    const filterTickets = tickets.filter(t => t.table._id.equals(selectedTable));
  } 


  // console.log(allTables)
  return (
    <>
      <div className='header'>Encore</div>
    <main className='flex'>
      <aside className='ticketinfo'>
        {
          selectedTable ? 
          tickets.filter(t => t.table._id.equals(selectedTable)).map(ticket =>
            <TicketsForTables
              key={ticket._id}
              ticket={ticket}
            />)
            :
            allTickets
        }
      </aside>
      <div className="TableList">
        {allTables}
      </div>
    </main>
    </>
  );
}