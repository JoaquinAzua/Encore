import './TableList.css'
import { useState } from 'react';
import TableTickets from '../TableTickets/TableTickets'
import TicketsForTables from '../TicketsForTables/TicketsForTables'

export default function TableList({tables, tickets, handleAddToCart}) {
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
      handleAddToCart={handleAddToCart}
    />
  );
  
  


  console.log(selectedTable)
  // console.log(filterTickets)
  return (
    <>
      {/* <div className='header'></div> */}
    <main className='flex'>
      <aside className='ticketinfo'>
        <div>
          
        </div>
        {
          selectedTable 
          ? 
          filterTickets
          .map(ticket =>
            <TicketsForTables
              key={ticket._id}
              ticket={ticket}
              handleAddToCart={handleAddToCart}
            />)
            :
            "Select a table to view tickets"
        }
      </aside>
      <div>
        <div className='stage'>Concert Main Stage</div>
        <div className="TableList">
          {allTables}
        </div>
      </div>
    </main>
    </>
  );
}