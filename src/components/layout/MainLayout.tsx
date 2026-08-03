import { Layout, Menu, type MenuProps } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps['items'] = [
    {
        key: '1',
        icon: <UploadOutlined />,
        label: 'Dashboard',
    },
    {
        key: '2',
        icon: <VideoCameraOutlined />,
        label: 'Profile',
    },
    {
        key: '3',
        icon: <UserOutlined />,
        label: 'User Management',
        children: [
            {
                key: '3-1',
                icon: <UserOutlined />,
                label: 'Create Admin',
            },
            {
                key: '3-2',
                icon: <UserOutlined />,
                label: 'Create Student',
            },
        ],
    },
]


const MainLayout = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div style={{color:"#fff", textAlign: 'center', height: "3rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <h1 >PH University</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, }} />
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                        }}
                    >
                        <h1>Main Content Should go here</h1>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{currentYear} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default MainLayout;