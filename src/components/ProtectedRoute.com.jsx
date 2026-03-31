import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { selectCurrentUser } from '../store/auth/auth.selector';

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const currentUser = useSelector(selectCurrentUser);
  const location = useLocation();

  useEffect(() => {
    if (!currentUser) {
      navigate('/login', {
        state: {
          from: location.pathname,
        },
      });
    }
  }, [currentUser]);

  return <React.Fragment>{currentUser && props.children}</React.Fragment>;
};
export default ProtectedRoute;
