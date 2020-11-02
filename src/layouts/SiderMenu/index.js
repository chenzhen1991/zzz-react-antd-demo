/* eslint-disable import/extensions */
import React, { useEffect, useState, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Layout, Menu, Row } from 'antd';

import { appStores } from '@/stores';
import './style.less';

/* 用来渲染下方的导航 */
const renderMenuItem = target => {
  return target
    .filter(item => item.path && item.name)
    .map(subMenu => {
      /* 如果有子路由，那就把子路由也渲染出来  但是前提是有路径和名称 */
      if (subMenu.childRoutes && !!subMenu.childRoutes.find(child => child.path && child.name)) {
        return (
          <Menu.SubMenu
            key={subMenu.path}
            title={
              <div>
                <span>{subMenu.name}</span>
              </div>
            }
          >
            {/* 递归 */}
            {renderMenuItem(subMenu.childRoutes)}
          </Menu.SubMenu>
        );
      }
      /* 这个是如果没有子路由那么就直接渲染，不用做别的处理 */
      return (
        <Menu.Item key={subMenu.path}>
          <Link to={subMenu.path}>
            <span>
              <span>{subMenu.name}</span>
            </span>
          </Link>
        </Menu.Item>
      );
    });
};

const SiderMenu = ({ routes }) => {
  /* 获取当前页面的地址信息 例如 /welcome */
  const { pathname } = useLocation();
  console.log('pathname',pathname);
  const { globalStore } = appStores();
  const [openKeys, setOpenKeys] = useState([]);

  useEffect(() => {
    /* 对获取到的路由地址做处理 获取到路由的名称 例如： welcome */
    const list = pathname.split('/').splice(1);
    /* [ '/welcome', '/welcome/me' ] */
    setOpenKeys(list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`));
  }, []);

  const getSelectedKeys = useMemo(() => {
    const list = pathname.split('/').splice(1);
    // [ '/welcome', '/welcome/me' ]
    return list.map((item, index) => `/${list.slice(0, index + 1).join('/')}`);
  }, [pathname]);

  const onOpenChange = keys => {
    setOpenKeys(keys);
  };

  return (
    <Layout.Sider
      trigger={null}
      collapsible
      collapsed={globalStore.collapsed}
      className="main-left-slider"
    >
      <Link to="/">
        <Row type="flex" align="middle" className="main-logo">
          {!globalStore.collapsed && <span className="app-name">{globalStore.appTitle}</span>}
        </Row>
      </Link>
      <Menu
        mode="inline"
        theme="dark"
        style={{ paddingLeft: 0, marginBottom: 0 }}
        className="main-menu"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        selectedKeys={getSelectedKeys}
      >
        {renderMenuItem(routes)}
      </Menu>
    </Layout.Sider>
  );
};

export default observer(SiderMenu);
