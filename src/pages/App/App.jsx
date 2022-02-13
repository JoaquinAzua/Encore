import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service"
import { Routes, Route, Navigate } from 'react-router-dom';
import CheckoutPage from '../CheckoutPage/CheckoutPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../../components/OrderHistory/OrderHistory';
import NavBar from '../../components/NavBar/NavBar';
import EventsPage from '../EventsPage/EventsPage';
import TableTicketsPage from '../TableTicketsPage/TableTicketsPage';



function App() {
  const [user, setUser] = useState(getUser());
  const [cart, setCart] = useState({});
  return (
    <main className="App">
      {
        user ? 
        <>
        <NavBar user={user} setUser={setUser} cart={cart} />
          <Routes>
            {/* Future routes go here */}
            <Route path="/orders/cart/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/tables" element={<TableTicketsPage setCart={setCart} />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/events" />} />
          </Routes>
        </>
        :
        <AuthPage user={user} setUser={setUser} />
      }
          
      <footer className='copyright'>© ENCORE EVENTS • ALL RIGHTS RESERVED &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; WEBSITE DESIGN & DEVELOPEMENT BY Joaquin Azua </footer>
    </main>
  );
}

export default App;
