import React, { useEffect } from "react"
import { Login } from "features/auth/ui/Login"
import { Users } from "features/users/ui/Users"
import { Profile } from "features/profile/ui/Profile"
import Layout, { Content, Footer, Header } from "antd/lib/layout/layout"
import Sider from "antd/lib/layout/Sider"
import { Menu } from "antd"
import { theme } from "antd/lib"

function App() {
  return (
    <Layout hasSider style={{ minHeight: '100vh' }}>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['4']}
        />
      </Sider>

      <Layout style={{ marginLeft: 200 }}>
        <Header
          style={{
            position: 'fixed',
            top: 0,
            zIndex: 1,
            width: '100%',
            padding: 0,
            backgroundColor: '#171729'
          }}
        />

        <Content
          style={{
            margin: '300px 16px 0',
            overflow: 'initial',
            flex: '1 0 auto' }}>

          <div>
            <Profile/>
            --------------------------------------------------
            <Login />
            ---------------------------------------------------
            <Users />
          </div>

        </Content>

        <Footer
          style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            zIndex: 1,
            background: '#fff',
            backgroundColor: '#171729',
            color: 'white'
          }}
        >
          <div style={{ padding: '16px' }}>Social network created by Michael Hemsky</div>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default App