import React from "react";
import styles from "./index.module.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Rating } from "@mantine/core";

const UserInformation = () => {
  const userbiodata = [
    {
      name: "Personal Information",
      fields: [
        {
          title: "Full Name",
          value: "Grace Effon",
        },
        {
          title: "Phone Number",
          value: "07062475090",
        },
        {
          title: "Email Address",
          value: "grace@gmail.com",
        },
        {
          title: "BVN",
          value: "94592329412",
        },
        {
          title: "Gender",
          value: "Male",
        },
        {
          title: "Marital Status",
          value: "Single",
        },
        {
          title: "Children",
          value: "5",
        },
        {
          title: "Type of Residence",
          value: "Parent's Apartment",
        }
      ],
    },
    {
      name: "Education and Employement",
      fields: [
        {
          title: "Level of Education",
          value: "Grace Effon",
        },
        {
          title: "Employement Status",
          value: "07062475090",
        },
        {
          title: "Sector of Employment",
          value: "grace@gmail.com",
        },
        {
          title: "Duration of Employment",
          value: "94592329412",
        },
        {
          title: "Office Email",
          value: "Male",
        },
        {
          title: "Monthly Income",
          value: "Single",
        },
        {
          title: "Loan Repayment",
          value: "5",
        },        
      ],
    },
    {
      name: "Socials",
      fields: [
        {
          title: "Twitter",
          value: "@grace_effiom",
        },
        {
          title: "Face Book",
          value: "Grace Effiom",
        },
        {
          title: "Instagram",
          value: "@grace_effiom",
        },               
      ],
    },
    {
      name: "Guarantor",
      fields: [
        {
          title: "Full Name",
          value: "Debby Onaga",
        },
        {
          title: "Phone Number",
          value: "07045239512",
        },
        {
          title: "Email Address",
          value: "debby@gmail.com",
        },   
        {
          title: "RelationShip",
          value: "Sister",
        },             
      ],
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.firstSection}>
        <section
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "1.1rem",
          }}
        >
          <div className={styles.userImage}>
            <Icon icon="octicon:person-24" color="#213F7D" fontSize={"30px"} />
          </div>
          <div className={styles.userInfofsection}>
            <section className={styles.userName}>
              <p>Grace Effiom</p>
              <p>LSQFf587g90</p>
            </section>
            <section className={styles.userSection2}>
              <p>User&apos;s ties</p>
              <Rating count={3} defaultValue={1} />
            </section>
            <section>
              <p
                style={{
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#213F7D",
                }}
              >
                &#8358;200,000
              </p>
              <p className={styles.userBankDetails}>9912345678/Providus Bank</p>
            </section>
          </div>
        </section>
        <section className={styles.secondSection}>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and Systems</p>
        </section>
      </div>
      <div className={styles.UserBioData}>
        {userbiodata.map((userbio) => {
          return (
            <div className={styles.biodata} key={userbio.name}>
              <p className={styles.biodataname}>{userbio.name}</p>
              <div className={styles.biodataContaier}>
                {userbio.fields.map((biodata) => (
                  <div key={biodata.title}>
                    <p className={styles.biodataTitle}>{biodata.title}</p>
                    <p className={styles.biodataValue}>{biodata.value}</p>
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
