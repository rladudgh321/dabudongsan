import {
  TeamOutlined,
  UserOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const ORIGIN_URL = 'http://127.0.0.1:3000';

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('매물관리', 'sub1', <UserOutlined />, [
    getItem(<Link href={`${ORIGIN_URL}/admins/landlist`}>매물목록</Link>, 'list'),
    getItem(<Link href={`${ORIGIN_URL}/admins/recommand`}>이달의 추천 부동산</Link>, 'recommand'),
    getItem('급매물', 'fast'),
    getItem('최신매물', 'recently'),
  ]),
  getItem('연락', 'sub2', <TeamOutlined />, [
    getItem('메시지', 'message'),
    getItem('통계', 'analystics')
  ]),
];

console.log('***************',process.env.ORIGIN_URL);
// let pathname = null;
// if(global) {
//   console.log('href', global.location.href);
//   const url = global.location.href;
// }

const BackLayout = ({children}) => {
const router = useRouter();
const url = router.pathname;
const pathname = url.split('/')[2];


  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>매물관리</Breadcrumb.Item>
            {
              (pathname === 'landlist' && <Breadcrumb.Item>매물목록</Breadcrumb.Item> ) ||
              (pathname === 'recommand' && <Breadcrumb.Item>추천매물</Breadcrumb.Item>)
            }
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
          {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default BackLayout;