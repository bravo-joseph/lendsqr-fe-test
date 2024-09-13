"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./index.module.scss";
import { TextInput } from "@mantine/core";
import { Icon } from "@iconify/react";

const AdminTopMenuBar = () => {
  return (
    <div className={styles.container}>
      <div>
        <img src="/images/png/lendsqr-logo.png" alt="" className={styles.img} />
        <TextInput
          styles={{
            input: {
              width: "400px",
              borderStyle: "solid",                            
              borderRadius: "8px",
              paddingTop: "0px",
              paddingBlock: "0px",
              borderWidth: "2px",
              height: "40px"
            },
            section: {
              backgroundColor: "#39CDCC",
              width: "56px",
            },
          }}
          placeholder="Search for anything"
          rightSection={
            <Icon icon="ic:baseline-search" color="white" fontSize={"20px"} />
          }
        />
      </div>
      <section className={styles.section}>
        <p>Docs</p>
        <Icon icon="uiw:bell" fontSize={"23px"} color="#213F7D" />
        <div>
          <img src="/images/png/avatar.png" alt="" />
          <p>Adedeji</p>
          <Icon icon="gridicons:dropdown" color="#213F7D" />
        </div>
      </section>
    </div>
  );
};

export default AdminTopMenuBar;
