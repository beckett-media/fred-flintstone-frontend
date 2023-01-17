import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Shipping from './pages/Shipping.page';
import Receiving from './pages/Receiving.page';
import Home from './pages/Home.page';
import NoMatch from './pages/404.page';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import OrderDetails from './pages/OrderDetails.page';
import Reports from './pages/Reports.page';
import Login from './pages/Login/Login.page';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from './store/auth/auth.selector';
import ProtectedRoute from './components/ProtectedRoute.com';

export default function App() {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
      return;
    }
  }, [currentUser]);

  return (
    <div className="app">
      <NavBar />
      <div className="main">
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="shipping"
              element={
                <ProtectedRoute>
                  <Shipping />
                </ProtectedRoute>
              }
            />
            <Route
              path="receiving"
              element={
                <ProtectedRoute>
                  <Receiving />
                </ProtectedRoute>
              }
            />
            <Route
              path="order-details"
              element={
                <ProtectedRoute>
                  <OrderDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="reports"
              element={
                <ProtectedRoute>
                  <Reports />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
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
