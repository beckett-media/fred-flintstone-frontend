import React from 'react';
import LeftMenu from './LeftMenu';
import { Drawer, Button } from 'antd';

const NavBar = () => {
  const [visible, setVisible] = React.useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <nav className="menuBar">
      <div className="logo">
        <a href="">Beckett Shipping and Receiving</a>
      </div>
      <div className="menuCon">
        <div className="leftMenu">
          <LeftMenu drawerOpened={visible} />
        </div>

        <Button className="barsMenu" type="primary" onClick={showDrawer}>
          <span className="barsBtn"></span>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          key="right"
          closable={false}
          onClose={onClose}
          open={visible}
        >
          <LeftMenu drawerOpened={visible} />
        </Drawer>
      </div>
    </nav>
  );
};

export default NavBar;
