import { useState, useEffect } from 'react';
import * as tablesAPI from '../../utilities/tables-api';
import TableList from '../../components/TableList/TableList';


export default function TablesPage({ user, setUser }) {
    const [allTables, setAllTables] = useState([]);
  
    useEffect(function () {
      async function getTables() {
        const tables = await tablesAPI.getAll();
        setAllTables(tables);
        console.log(tables)
      }
      getTables();
    
    }, [])
      return (
        <main className="EventsPage"> 
            <TableList 
                key={allTables._id}
                tables={allTables}
            />
        </main>
      );
    }