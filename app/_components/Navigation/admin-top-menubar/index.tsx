"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./index.module.scss";
import { Icon } from "@iconify/react";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { Drawer } from "@mantine/core";

interface Props {
  navigation: React.ReactNode;
}

const AdminTopMenuBar: React.FC<Props> = ({ navigation }) => {
  const [opened, { open, close }] = useDisclosure(false);
  const mobile = useMediaQuery("(max-width: 74.9em)");
  return (
    <div className={styles.container}>
      <div>
        <img src="/images/png/lendsqr-logo.png" alt="" className={styles.img} />
        {mobile && (
          <div className={styles.burger} onClick={open}>
            <Icon
              icon="tabler:menu-2"
              fontSize={"30px"}
              className={styles.burger}
            />
          </div>
        )}
        <div className={styles.searchInput}>
          <input type="text" placeholder="Search for anything" />
          <div>
            <Icon icon="ic:baseline-search" color="white" fontSize={"20px"} />
          </div>
        </div>
      </div>
      <section className={styles.section}>
        <p className={styles.docsTypography}>Docs</p>
        <Icon icon="uiw:bell" fontSize={"23px"} color="#213F7D" />
        <div>
          <img src="/images/png/avatar.png" alt="" />
          <p>Adedeji</p>
          <Icon icon="gridicons:dropdown" color="#213F7D" />
        </div>
      </section>
      <Drawer opened={opened} onClose={close}>
        <div
          style={{
            backgroundColor: "white",
          }}
        >
          <img
            src="/images/png/lendsqr-logo.png"
            alt=""
            className={styles.imge}
          />
          {navigation}
        </div>
      </Drawer>
    </div>
  );
};

export default AdminTopMenuBar;
