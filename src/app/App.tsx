import React from "react"
import { Login } from "features/auth/ui/Login"
import { Users } from "features/users/ui/Users"
import { Profile } from "features/profile/ui/Profile"
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
import { Menu } from "antd"
import { MenuProps } from "antd/lib"

function App() {

  const navItems: MenuProps['items'] = ['Profile', 'Users', 'Login'].map((key) => ({
    key,
    label: `${key}`,
  }));

  return (
    <Layout style={{height: '100vh'}}>
      <Header style={{ display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        width: '100%'
      }}>
        <Menu
          theme="dark"
          mode="horizontal"/>
      </Header>
      <Content style={{ padding: '70px 50px 200px 50px' }}>
        <Layout style={{ padding: '24px 0'}}>
          <Sider width={200}>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['4']}
              defaultOpenKeys={['sub1']}
              items ={navItems}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Login/>
            <Users/>
            <Profile/>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center', position:'fixed', bottom:0, width:'100%'}}>
        Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}

export default App