"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import UserInformationCards from "@/app/_components/Users/user-informationcards";
import NavigaitonIcon from "@/app/_components/Navigation/navigation-icons";
import UserTable from "@/app/_components/Users/user-table";
import { useQuery } from "@tanstack/react-query";
import { v1getAllUsers } from "@/app/services/version1/queries";
import ADMINQUERYKEYS from "@/app/services/version1/querykeys";

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

const UsersList = () => {
  const [pageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { data, isLoading } = useQuery({
    queryFn: v1getAllUsers,
    queryKey: [ADMINQUERYKEYS.USERS],   
  });
  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedData = data?.data.data.slice(startIndex, endIndex) ?? [];

    // Handle page change
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  // Total pages
  const totalPages = Math.ceil((data?.data.data.length ?? 0) / pageSize);

  return (
    <div className={styles.container}>
      <p className={styles.headerText}>Users</p>
      <section>
        {UserDetails.map((user) => {
          return <UserInformationCards data={user} key={user.title} />;
        })}
      </section>
      <UserTable data={paginatedData} isloading={isLoading} handlePageChange={handlePageChange} totalPages={totalPages}/>
    </div>
  );
};

export default UsersList;


