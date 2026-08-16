import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";


const Sidebar = () => {
    return (
        <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div style={{color:"#fff", textAlign: 'center', height: "3rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <h1 >PH University</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItemsGenerator(adminPaths, "admin")} />
            </Sider>
    );
};

export default Sidebar;