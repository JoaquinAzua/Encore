import './TableList.css'
import { useState, useEffect } from 'react';
import TableTickets from '../TableTickets/TableTickets'
import TicketsForTables from '../TicketsForTables/TicketsForTables'

export default function TableList({tables, tickets}) {
  const [selectedTable, setSelectedTable] = useState(null);

  let filterTickets = tickets.filter(t => t.table._id === selectedTable);

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
  
  


  console.log(selectedTable)
  // console.log(filterTickets)
  return (
    <>
      <div className='header'>Encore</div>
    <main className='flex'>
      <aside className='ticketinfo'>
        <div>
          selectedTable
        </div>
        {
          selectedTable 
          ? 
          filterTickets
          .map(ticket =>
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