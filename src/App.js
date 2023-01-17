import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Shipping from './pages/Shipping.page';
import Receiving from './pages/Receiving.page';
import Home from './pages/Home.page';
import NoMatch from './pages/404.page';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import OrderDetails from './pages/OrderDetails.page';
import Reports from './pages/Reports.page';

export default function App() {
  return (
    <div className="app">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="shipping" element={<Shipping />} />
            <Route path="receiving" element={<Receiving />} />
            <Route path="order-details" element={<OrderDetails />} />
            <Route path="reports" element={<Reports />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </div>
      <footer>
        <p className="footer">
          We are making Beckett Shipping and Receiving better ❤️
        </p>
      </footer>
    </div>
  );
}

// function Layout() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/shipping">Shipping</Link>
//           </li>
//           <li>
//             <Link to="/receiving">Receiving</Link>
//           </li>
//           <li>
//             <Link to="/nothing-here">Nothing Here</Link>
//           </li>
//         </ul>
//       </nav>

//       <hr />

//       <Outlet />
//     </div>
//   );
// }
