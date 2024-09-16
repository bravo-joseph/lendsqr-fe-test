"use client";

import React from "react";
import styles from "./page.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import UserInformation from "@/app/_components/Users/user-information";
import { useRouter } from "next/navigation";


const UserDetailsPage = () => {  
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div
        className={styles.routeBack}
        onClick={() => {
          router.replace("/admin/users");
        }}
      >
        <Icon icon="teenyicons:arrow-left-solid" fontSize={"24px"} />
        <p>Back to Users</p>
      </div>
      <div className={styles.userCallToAction}>
        <p>User Details</p>
        <div>
          <button>BlackList User</button>
          <button>Active User</button>
        </div>
      </div>
      <UserInformation />
    </div>
  );
};

export default UserDetailsPage;
