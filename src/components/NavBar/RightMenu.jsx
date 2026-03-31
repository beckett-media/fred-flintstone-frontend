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
          <p
            style={{
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              textTransform: 'capitalize',
            }}
          >
            {user.name} -
          </p>
          <Button
            style={{ height: '40px', fontSize: 16 }}
            onClick={() => dispatch(logout())}
          >
            Log Out
          </Button>
        </div>
      ) : (
        <Button
          style={{ height: '40px', fontSize: 16 }}
          onClick={() => navigate('login')}
        >
          Login
        </Button>
      )}
    </>
  );
};

export default RightMenu;
