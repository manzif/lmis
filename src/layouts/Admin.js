import { Layout, Menu, Input  } from 'antd';
import {
  HomeOutlined,
  BarChartOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons';
import './admin.scss';
import { Route, Switch, Link } from 'react-router-dom';
import Home from '../pages/dashboard/Home/Home';
import Employment from '../pages/dashboard/data/Employment';
import Population from '../pages/dashboard/data/Population';
import LabourForce from '../pages/dashboard/data/LabourForce';
import UploadData from '../pages/dashboard/data/upload/Upload';
import Settings from '../pages/dashboard/settings/settings';
import Resources from '../pages/dashboard/resources/resources';
import NoAccess from '../pages/dashboard/data/noAccess';
const { Header, Sider } = Layout;
const { Search } = Input;
const { SubMenu } = Menu;

const onSearch = value => console.log(value);

function AdminLayout() {
  return (
    <Layout className="layout-wrapper">
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Search
            placeholder="Search ..."
            allowClear
            onSearch={onSearch}
            style={{ width: '500px', marginLeft: '20px', marginTop: '16px' }}
          />
          <SubMenu
            key="SubMenu"
            icon={<UserOutlined />}
            title="User"
            style={{ float: 'right' }}
          >
            <Menu.Item key="profile"><Link to="/profile">Profile</Link></Menu.Item>
            <Menu.Item key="logout"><Link to="/">Log Out</Link></Menu.Item>
          </SubMenu>
        </Menu>
      </Header>
      <Layout className="admin-layout">
        <Sider trigger={null} collapsible collapsed="false">
          <Menu className="sidebar-nav" theme="light" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/admin/home">Home</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<BarChartOutlined />}>
              <Link to="/admin/data">Data</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<AppstoreOutlined />}>
              <Link to="/admin/resources">Resources</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<SettingOutlined />}>
              <Link to="/admin/settings">Settings</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: '20px', background: '#fff' }}>
          <Switch>
            <Route path="/admin/home" component={Home} />
            <Route path="/admin/data" component={Employment} />
            <Route path="/admin/settings" component={Settings} />
            <Route path="/admin/resources" component={Resources} />
            <Route path="/admin/noaccess" component={NoAccess} />
            <Route path="/admin/population" component={Population} />
            <Route path="/admin/labourforce" component={LabourForce} />
            <Route path="/admin/upload" component={UploadData} />
          </Switch>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default AdminLayout;
