import React from 'react';
import {NavLink, useLocation} from 'react-router-dom'

import { Layout, Menu} from 'antd';
const { Header } = Layout;
const HeaderComponent = () => {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <Header>
            <NavLink to="/"home>
                <div className="logo" />
            </NavLink>
     
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={pathname}>
                <Menu.Item key="/home">
                    <NavLink to="/home">HOME</NavLink>
                </Menu.Item>
                <Menu.Item key="/new-movies">
                    <NavLink to="/new-movies">NEW MOVIES</NavLink>
                </Menu.Item>
                <Menu.Item key="/search-movies">
                    <NavLink to="/search-movies">SEARCH</NavLink>
                </Menu.Item>
            </Menu>
        </Header>
    );
}
export default React.memo(HeaderComponent);