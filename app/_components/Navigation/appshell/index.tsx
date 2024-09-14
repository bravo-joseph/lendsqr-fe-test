import React from "react";
import styles from "./index.module.scss";
import AdminTopMenuBar from "../admin-top-menubar";
interface Props {
  navigation: React.ReactNode;
  children: React.ReactNode;
}
const AdminShellWithNavigation: React.FC<Props> = ({
  navigation,
  children,
}) => {
  return (
    <div>
      <AdminTopMenuBar />
      <div className={styles.div}>
        <aside>{navigation}</aside>
        <main>          
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminShellWithNavigation;
