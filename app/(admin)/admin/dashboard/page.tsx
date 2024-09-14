"use client";
import React from "react";
import styles from "./page.module.scss";
import UserInformationCards from "@/app/_components/Users/user-informationcards";
import NavigaitonIcon from "@/app/_components/Navigation/navigation-icons";
import UserTable from "@/app/_components/Users/user-table";

interface CardType {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const UserDetails: CardType[] = [
  {
    icon: (
      <div className={styles.iconStyles}>
        <NavigaitonIcon id="userscardIcon" />
      </div>
    ),
    title: "Users",
    value: "2,453",
  },
  {
    icon: (
      <div className={styles.iconStyles2}>
        <NavigaitonIcon id="activeUsersIcon" />
      </div>
    ),
    title: "Active Users",
    value: "2,453",
  },
  // userswithLoanIcon
  {
    icon: (
      <div className={styles.iconStyles3}>
        <NavigaitonIcon id="userswithLoanIcon" />
      </div>
    ),
    title: "Users with Loans",
    value: "12,453",
  },
  {
    icon: (
      <div className={styles.iconStyles4}>
        <NavigaitonIcon id="userswithsavingsIcon" />
      </div>
    ),
    title: "Users with Savings",
    value: "102,453",
  },
];

const page = () => {
  return (
    <div className={styles.container}>
      <p className={styles.headerText}>Users</p>
      <section>
        {UserDetails.map((user) => {
          return <UserInformationCards data={user} key={user.title} />;
        })}
      </section>
      <UserTable />
    </div>
  );
};

export default page;
