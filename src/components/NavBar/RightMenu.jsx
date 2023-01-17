import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const RightMenu = () => {
  const navigate = useNavigate();

  return <Button onClick={() => navigate('login')}>Login</Button>;
};

export default RightMenu;
