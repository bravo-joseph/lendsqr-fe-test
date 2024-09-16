/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { NavGroup } from "../../_constants/types";
import NavButton from "../navigation-link";
import { useDisclosure } from "@mantine/hooks";
import NavigaitonIcon from "../navigation-icons";
import styles from "./index.module.scss";
import Image from "next/image";

interface Props {
  navGroups: NavGroup[];
  prefix?: string;
}

const AdminNavigationList: React.FC<Props> = ({ navGroups, prefix }) => {
  const [, { toggle }] = useDisclosure();
  return (
    <div className={styles.container}>
      <ul>
        {navGroups.map((group) => (
          <li key={group.name}>
            <p className={styles.headText}>{group.name}</p>
            <ul style={{
              marginBottom: "20px"
            }}>
              {group.routes.map(({ icon, leftsection, ...r }) => (
                <li key={r.name}>
                  <NavButton
                    onClick={toggle}
                    pathPrefix={prefix}
                    icon={<NavigaitonIcon id={icon} />}
                    leftSection={<NavigaitonIcon id={leftsection} />}
                    href={r.path}
                  >
                    {r.name}
                  </NavButton>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <div
        style={{
          width: "100%",
          borderTop: "2px solid rgba(33, 64, 125, 0.105)",   
          padding: "2rem",
          marginTop: "2rem",
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          color: "#213F7D"
        }}
      >
        <Image src="/images/icons/logoutIcon.png" width={16} height={16} alt="logour" />
        Logout
      </div>
    </div>
  );
};

export default AdminNavigationList;
