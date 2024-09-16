"use client"; // This enables the component to run on the client side
import React, { useState } from "react";
import styles from "./page.module.scss";
import UserInformationCards from "@/app/_components/Users/user-informationcards";
import NavigaitonIcon from "@/app/_components/Navigation/navigation-icons";
import UserTable from "@/app/_components/Users/user-table";
import { useUsersContext } from "@/app/_providers/context-providers";

interface CardType {
  icon: React.ReactNode; // Represents the icon in the user info card
  title: string; // Title of the card (e.g., Users, Active Users)
  value: string; // Value associated with the card (e.g., number of users)
}

const UsersList = () => {
  const [pageSize] = useState<number>(10); // Sets number of users per page to 10
  const [currentPage, setCurrentPage] = useState<number>(1); // Tracks the current page for pagination

  // Using context to get the users data and loading state
  const { users, isLoading } = useUsersContext();
  console.log(users); // Debugging log to check the fetched user data

  // Pagination logic: calculating the start and end index for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  // Slicing the users data to only show the users for the current page
  const paginatedData = users?.data.data.slice(startIndex, endIndex) ?? [];

  // Function to handle page changes when the user navigates through pages
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  // Total number of pages for pagination based on the number of users
  const totalPages = Math.ceil((users?.data.data.length ?? 0) / pageSize);

  // Information for the user stats cards (Users, Active Users, etc.)
  const UserDetails: CardType[] = [
    {
      icon: (
        <div className={styles.iconStyles}>
          <NavigaitonIcon id="userscardIcon" /> {/* User icon */}
        </div>
      ),
      title: "Users",
      value: `${users?.data.data.length ?? "0"}`, // Total number of users
    },
    {
      icon: (
        <div className={styles.iconStyles2}>
          <NavigaitonIcon id="activeUsersIcon" /> {/* Active users icon */}
        </div>
      ),
      title: "Active Users",
      value: `${
        users?.data.data.filter(
          (user) => user.personalInformation.status === "Active"
        ).length ?? "0" // Count of active users
      }`,
    },
    {
      icon: (
        <div className={styles.iconStyles3}>
          <NavigaitonIcon id="userswithLoanIcon" /> {/* Users with loans icon */}
        </div>
      ),
      title: "Users with Loans",
      value: "120", // Placeholder value (you can replace it with actual logic if necessary)
    },
    {
      icon: (
        <div className={styles.iconStyles4}>
          <NavigaitonIcon id="userswithsavingsIcon" /> {/* Users with savings icon */}
        </div>
      ),
      title: "Users with Savings",
      value: "400", // Placeholder value (you can replace it with actual logic if necessary)
    },
  ];

  return (
    <div className={styles.container}>
      <p className={styles.headerText}>Users</p> {/* Header for the users list */}
      
      {/* Rendering the user information cards */}
      <section>
        {UserDetails.map((user) => {
          return <UserInformationCards data={user} key={user.title} />; // Displaying user info cards
        })}
      </section>
      
      {/* Rendering the user table with paginated data */}
      <UserTable
        data={paginatedData} // The current page data to display
        isloading={isLoading} // Loading state to show a spinner or loader if data is still being fetched
        handlePageChange={handlePageChange} // Function to handle page change
        totalPages={totalPages} // Total number of pages for pagination
      />
    </div>
  );
};

export default UsersList;
