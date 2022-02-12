import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as ordersAPI from '../../utilities/orders-api';
import * as tablesAPI from '../../utilities/tables-api';
import * as ticketsAPI from '../../utilities/tickets-api'
import TableList from '../../components/TableList/TableList';



export default function TablesPage({ user, setUser, setCart }) {
    const [allTables, setAllTables] = useState([]);
    const [allTickets, setAllTickets] = useState([]);

  const navigate = useNavigate();

  async function handleAddToCart(ticketId) {
    const cart = await ordersAPI.addTicketToCart(ticketId); 
    setCart(cart);
  }
  
  useEffect(function () {
    async function getTablesTickets() {
      const tables = await tablesAPI.getAll();
      const tickets = await ticketsAPI.getAll();
      setAllTables(tables);
      setAllTickets(tickets)
    }
    getTablesTickets();
    
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
    
    
  }, [])
  return (
    <main className="EventsPage"> 
            <TableList 
              key={allTables._id}
              tables={allTables}
              tickets={allTickets}
               handleAddToCart={handleAddToCart}
              />
        </main>
      );
    }