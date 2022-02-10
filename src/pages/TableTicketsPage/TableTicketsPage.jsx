import { useState, useEffect } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import * as ticketsAPI from '../../utilities/tickets-api'
import TableList from '../../components/TableList/TableList';



export default function TablesPage({ user, setUser }) {
    const [allTables, setAllTables] = useState([]);
    const [allTickets, setAllTickets] = useState([]);
  
    useEffect(function () {
      async function getTablesTickets() {
        const tables = await tablesAPI.getAll();
        const tickets = await ticketsAPI.getAll();
        setAllTables(tables);
        setAllTickets(tickets)
        // console.log(tables)
        // console.log(tickets)
      }
      getTablesTickets();
    
    }, [])
      return (
        <main className="EventsPage"> 
            <TableList 
                key={allTables._id}
                tables={allTables}
                // key={allTickets._id}
                tickets={allTickets}
            />
            
        </main>
      );
    }