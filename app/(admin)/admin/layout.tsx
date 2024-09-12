import ADMIN_NAV_GROUPS from "@/app/_components/_constants/navigation";
import AdminShellWithNavigation from "@/app/_components/Navigation/appshell";
import AdminNavigationList from "@/app/_components/Navigation/navigation-list";
import React from "react";

interface Props {
  children: React.ReactNode;
}
const AdminSideMenu = () => {
  return <AdminNavigationList prefix="/admin" navGroups={ADMIN_NAV_GROUPS} />;
};

const AdminLayout: React.FC<Props> = ({ children }) => {
  return ( <AdminShellWithNavigation navigation={<AdminSideMenu />}>{children}</AdminShellWithNavigation>);
};

export default AdminLayout;
