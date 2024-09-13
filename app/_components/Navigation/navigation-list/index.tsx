/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { NavGroup } from "../../_constants/types";
import NavButton from "../navigation-link";
import { useDisclosure } from "@mantine/hooks";
import NavigaitonIcon from "../navigation-icons";
import styles from "./index.module.scss";

interface Props {
  navGroups: NavGroup[];
  prefix?: string;
}

const AdminNavigationList: React.FC<Props> = ({ navGroups, prefix }) => {
  const [, { toggle }] = useDisclosure();
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <img src="/images/png/lendsqr-logo.png" alt="company logo" />
      </div>
      <ul>
        {navGroups.map((group) => (
          <li key={group.name}>
            <p className={styles.headText}>{group.name}</p>
            <ul>
              {group.routes.map(({ icon, ...r }) => (
                <li key={r.name}>
                  <NavButton
                    onClick={toggle}
                    pathPrefix={prefix}
                    icon={<NavigaitonIcon id={icon} />}
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
    </div>
  );
};

export default AdminNavigationList;
