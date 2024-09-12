import React from "react";
interface Props {
  navigation: React.ReactNode;
  children: React.ReactNode;
}
const AdminShellWithNavigation: React.FC<Props> = ({children }) => {
  return (<div >
    {/* {navigation} */}
    {children}</div>);
};

export default AdminShellWithNavigation;
