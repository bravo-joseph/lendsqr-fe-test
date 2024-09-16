import React from "react";
import styles from "./index.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js"; // Icon component from Iconify library
import { Rating } from "@mantine/core"; // Rating component from Mantine library for star ratings
import { useUsersContext } from "@/app/_providers/context-providers"; // Custom context to fetch users data
import { useParams } from "next/navigation"; // Hook to access URL parameters

const UserInformation = () => {
  // Fetching user data from the context
  const { users } = useUsersContext();
  
  // Fetching the user ID from the URL parameters
  const { id } = useParams();

  // Finding the user data based on the BVN (Bank Verification Number) in the URL
  const userData = users?.data.data.find(
    (details) => details.personalInformation.bvn === id
  );
  console.log(userData); // For debugging purposes, log the user data

  // Structuring user bio data to display in the UI
  const userbiodata = [
    {
      name: "Personal Information", // Section title
      fields: [
        {
          title: "Full Name", // Field label
          value: `${userData?.personalInformation.fullName}`, // Field value from user data
        },
        {
          title: "Phone Number",
          value: `${userData?.personalInformation.phoneNumber}`,
        },
        {
          title: "Email Address",
          value: `${userData?.personalInformation.email}`,
        },
        {
          title: "BVN",
          value: `${userData?.personalInformation.bvn}`,
        },
        {
          title: "Gender",
          value: `${userData?.personalInformation.gender}`,
        },
        {
          title: "Marital Status",
          value: `${userData?.personalInformation.maritalStatus}`,
        },
        {
          title: "Children", // Hardcoded value, can be dynamic if needed
          value: "5",
        },
        {
          title: "Type of Residence", // Hardcoded value, can be dynamic if needed
          value: "Parent's Apartment",
        },
      ],
    },
    {
      name: "Education and Employment", // Section title for education and employment details
      fields: [
        {
          title: "Level of Education",
          value: `${userData?.educationInformation.levelOfEducation}`,
        },
        {
          title: "Employment Status",
          value: `${userData?.educationInformation.employmentStatus}`,
        },
        {
          title: "Sector of Employment",
          value: `${userData?.educationInformation.sectorOfEmployment}`,
        },
        {
          title: "Duration of Employment",
          value: `${userData?.educationInformation.durationOfEmployment}`,
        },
        {
          title: "Office Email",
          value: `${userData?.educationInformation.officeEmail}`,
        },
        {
          title: "Monthly Income", // Hardcoded value, can be dynamic if needed
          value: "Single",
        },
        {
          title: "Loan Repayment", // Hardcoded value, can be dynamic if needed
          value: "5",
        },
      ],
    },
    {
      name: "Socials", // Section title for social media details
      fields: [
        {
          title: "Twitter",
          value: `${userData?.socials.twitter}`,
        },
        {
          title: "Facebook",
          value: `${userData?.socials.facebook}`,
        },
        {
          title: "Instagram",
          value: `${userData?.socials.instagram}`,
        },
      ],
    },
    {
      name: "Guarantor", // Section title for the user's guarantor details
      fields: [
        {
          title: "Full Name",
          value: `${userData?.guarantor.fullName}`,
        },
        {
          title: "Phone Number",
          value: `${userData?.guarantor.phoneNumber}`,
        },
        {
          title: "Email Address",
          value: `${userData?.guarantor.emailAddress}`,
        },
        {
          title: "Relationship",
          value: `${userData?.guarantor.relationShip}`,
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        {/* Section to display user profile information */}
        <section
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1.1rem",
          }}
        >
          {/* User profile image or placeholder */}
          <div className={styles.userImage}>
            <Icon icon="octicon:person-24" color="#213F7D" fontSize={"30px"} />
          </div>
          
          {/* User basic information: name, organization, rating, and bank details */}
          <div className={styles.userInfofsection}>
            <section className={styles.userName}>
              <p>{userData?.personalInformation.fullName}</p>
              <p>{userData?.personalInformation.orgainzarionName}</p>
            </section>

            {/* User rating information */}
            <section className={styles.userSection2}>
              <p>User&apos;s ties</p>
              <Rating count={3} defaultValue={1} /> {/* Star rating for user's ties */}
            </section>

            {/* User financial details */}
            <section>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#213F7D",
                }}
              >
                &#8358;200,000 {/* Hardcoded value for balance */}
              </p>
              <p className={styles.userBankDetails}>9912345678/Providus Bank</p> {/* Bank details */}
            </section>
          </div>
        </section>

        {/* Navigation section for different user details */}
        <section className={styles.secondSection}>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and Systems</p>
        </section>
      </div>

      {/* User biodata section, dynamically displaying details */}
      <div className={styles.UserBioData}>
        {userbiodata.map((userbio) => {
          return (
            <div className={styles.biodata} key={userbio.name}>
              <p className={styles.biodataname}>{userbio.name}</p> {/* Section heading */}
              <div className={styles.biodataContaier}>
                {userbio.fields.map((biodata) => (
                  <div key={biodata.title}>
                    <p className={styles.biodataTitle}>{biodata.title}</p> {/* Field label */}
                    <p className={styles.biodataValue}>{biodata.value}</p> {/* Field value */}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserInformation;
