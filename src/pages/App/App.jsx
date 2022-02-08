import './App.css';
import { useState } from "react";
import { getUser } from "../../utilities/users-service"
import { Routes, Route } from 'react-router-dom';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import AuthPage from '../AuthPage/AuthPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import EventsPage from '../EventsPage/EventsPage';



function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {
        user ? 
        <>
        <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Future routes go here */}
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
            <Route path="/events" element={<EventsPage />} />
          </Routes>
        </>
        :
        <AuthPage user={user} setUser={setUser} />
      }
    </main>
  );
}

export default App;
