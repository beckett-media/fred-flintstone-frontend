import React, { useState } from 'react';
import { Menu } from 'antd';
import { useNavigate } from "react-router-dom";

const LeftMenu = ({ drawerOpened }) => {
  const [current, setCurrent] = useState('mail');
  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
    if(e.key === 'scanning') {
      navigate('/');
      return;
    }
    if(e.key === 'details') {
      navigate('/order-details');
      return;
    }
    if(e.key === 'reports') {
      navigate('/reports');
      return;
    }

  };

  const items = [
    {
      label: 'Scan Order',
      key: 'scanning',
    },
    {
      label: 'Order Details',
      key: 'details',
    },
    {
      label: 'Reports',
      key: 'reports',
    },
  ];
  return (
    <Menu
      onClick={onClick}
      className={"leftMenu"}
      selectedKeys={[current]}
      mode={drawerOpened ? 'inline' : 'horizontal'}
      items={items}
      style={{
        backgroundColor: "#161619",
        color: "#fff",
        "&:hover": {
          backgroundColor: "red",
          color: "#2bb8bd"
        },
      }}
    />
  );
};

export default LeftMenu;
