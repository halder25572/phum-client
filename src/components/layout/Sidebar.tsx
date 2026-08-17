import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import type { ItemType, MenuItemType } from "antd/es/menu/interface";
import type { TSidebarItem } from "../../types";
import { studentPaths } from "../../routes/student.routes";
import { facultyPaths } from "../../routes/faculty.routes";



const UserRole = {
    ADMIN: "admin",
    FACULTY: "faculty",
    STUDENT: "student"
}


const Sidebar = () => {

    const userRole = "admin";
    let sidebarItems: TSidebarItem[] | ItemType<MenuItemType>[] | undefined;

    switch (userRole) {
        case UserRole.ADMIN:
            sidebarItems = sidebarItemsGenerator(adminPaths, UserRole.ADMIN);
            break;
        case UserRole.FACULTY:
            sidebarItems = sidebarItemsGenerator(facultyPaths, UserRole.FACULTY);
            break;
        case UserRole.STUDENT:
            sidebarItems = sidebarItemsGenerator(studentPaths, UserRole.STUDENT);
            break;
        default:
            sidebarItems = [];
    }

    return (
        <Sider
                breakpoint="lg"
                collapsedWidth="0"
            >
                <div style={{color:"#fff", textAlign: 'center', height: "3rem", display: "flex", alignItems: "center", justifyContent: "center"}}>
                    <h1 >PH University</h1>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={sidebarItems} />
            </Sider>
    );
};

export default Sidebar