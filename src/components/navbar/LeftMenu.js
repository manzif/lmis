import React from 'react';
import { Menu, Grid } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  const location = useLocation().pathname;
  const selectedRoute = location === '/' ? location : location.substring(1);

  return (
    <Menu mode={md ? "horizontal" : "inline"} defaultSelectedKeys={selectedRoute}>
      <Menu.Item key="/">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="labour-market-indicators">
        <Link to="/labour-market-indicators">Labour Market Indicators</Link>
      </Menu.Item>
      <Menu.Item key="resources">
        <Link to="/resources">Resources</Link>
      </Menu.Item>
      <Menu.Item key="about-lmis">
        <Link to="/about-lmis">About LMIS</Link>
      </Menu.Item>
    </Menu>
  );
}

export default LeftMenu;