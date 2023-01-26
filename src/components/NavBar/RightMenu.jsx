import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { selectCurrentUser } from '../../store/auth/auth.selector';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/auth/auth.slice';
import './RightMenu.css';

const RightMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectCurrentUser);

  return (
    <>
      {user?.name ? (
        <div className="signout-info">
          <p style={{ color: 'white' }}>{user.name}</p>
          <Button onClick={() => dispatch(logout())}>Log Out</Button>
        </div>
      ) : (
        <Button onClick={() => navigate('login')}>Login</Button>
      )}
    </>
  );
};

export default RightMenu;
