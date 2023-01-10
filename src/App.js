import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Shipping from './pages/Shipping.page';
import Receiving from './pages/Receiving.page';
import Home from './pages/Home.page';
import NoMatch from './pages/404.page';

export default function App() {
  return (
    <div>
      <h1>Beckett Shipping and Receiving</h1>
      <p>We are making Beckett Shipping and Receiving better</p>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="receiving" element={<Receiving />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shipping">Shipping</Link>
          </li>
          <li>
            <Link to="/receiving">Receiving</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
