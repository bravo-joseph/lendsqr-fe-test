import { Pagination, Popover, Table } from "@mantine/core";
import { IoFilter } from "react-icons/io5";
import React from "react";
import styles from "./index.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";

const elements = [
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
  {
    status: "Inactive",
    phonenumber: "08078903721",
    email: "adedeji@lendsqr.com",
    organization: "Lendsqr",
    username: "Adedeji",
    date: "May 15, 2020 10:00 AM",
  },
];

const UserTable = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.organization}>
      <Table.Td>{element.organization}</Table.Td>
      <Table.Td>{element.username}</Table.Td>
      <Table.Td>{element.email}</Table.Td>
      <Table.Td>{element.phonenumber}</Table.Td>
      <Table.Td>{element.date}</Table.Td>
      <Table.Td>
        <p className={element.status ? styles.inActive : styles.false}>
          Inactive
        </p>
      </Table.Td>
      <Table.Td>
        <BsThreeDotsVertical />
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <div className={styles.container}>
        <Table
          styles={{
            td: {
              paddingTop: "1rem",
              paddingBottom: "1rem",
              borderBottom: "1px solid #213F7D1A",
              color: "#545F7D",
              fontSize: "14px",
              fontWeight: "500",
            },
          }}
          withRowBorders={false}
          withColumnBorders={false}
        >
          <Table.Thead>
            <Table.Tr>
              <Table.Th>
                <Popover width={270} withArrow shadow="md">
                  <Popover.Target>
                    <div className={styles.tableHeader}>
                      <p>Organization</p>
                      <IoFilter />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <div className={styles.popoverDiv}>
                      <p>Organisation</p>
                      <select
                        className={styles.popoverSelect}
                        name=""
                        id=""
                      ></select>
                    </div>
                    <div className={styles.popoverDiv}>
                      <p>Organisation</p>
                      <input className={styles.popoverSelect} name="" id="" />
                    </div>
                    <div className={styles.popoverDiv}>
                      <p>Organisation</p>
                      <input className={styles.popoverSelect} name="" id="" />
                    </div>
                    <div className={styles.popoverDiv}>
                      <p>Organisation</p>
                      <input className={styles.popoverSelect} name="" id="" />
                    </div>
                    <div className={styles.popoverDiv}>
                      <p>Phone Number</p>
                      <input
                        placeholder="Phone Number"
                        className={styles.popoverSelect}
                        name=""
                        id=""
                      />
                    </div>
                    <div className={styles.popoverDiv}>
                      <p>Status</p>
                      <select className={styles.popoverSelect} name="" id="" />
                    </div>
                    <div className={styles.filterActionDiv}>
                      <button>Reset</button>
                      <button>Filter</button>
                    </div>
                  </Popover.Dropdown>
                </Popover>
              </Table.Th>
              <Table.Th>
                <Popover width={200} withArrow shadow="md">
                  <Popover.Target>
                    <div className={styles.tableHeader}>
                      <p>Username</p>
                      <IoFilter />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam odit veniam exercitationem, ea saepe debitis
                      distinctio mollitia doloribus incidunt culpa?
                    </p>
                  </Popover.Dropdown>
                </Popover>
              </Table.Th>
              <Table.Th>
                <Popover width={200} withArrow shadow="md">
                  <Popover.Target>
                    <div className={styles.tableHeader}>
                      <p>Email</p>
                      <IoFilter />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam odit veniam exercitationem, ea saepe debitis
                      distinctio mollitia doloribus incidunt culpa?
                    </p>
                  </Popover.Dropdown>
                </Popover>
              </Table.Th>
              <Table.Th>
                <Popover width={200} withArrow shadow="md">
                  <Popover.Target>
                    <div className={styles.tableHeader}>
                      <p>Phone Number</p>
                      <IoFilter />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam odit veniam exercitationem, ea saepe debitis
                      distinctio mollitia doloribus incidunt culpa?
                    </p>
                  </Popover.Dropdown>
                </Popover>
              </Table.Th>
              <Table.Th>
                <Popover width={200} withArrow shadow="md">
                  <Popover.Target>
                    <div className={styles.tableHeader}>
                      <p>Date Joined</p>
                      <IoFilter />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam odit veniam exercitationem, ea saepe debitis
                      distinctio mollitia doloribus incidunt culpa?
                    </p>
                  </Popover.Dropdown>
                </Popover>
              </Table.Th>
              <Table.Th>
                <Popover width={200} withArrow shadow="md">
                  <Popover.Target>
                    <div className={styles.tableHeader}>
                      <p>Status</p>
                      <IoFilter />
                    </div>
                  </Popover.Target>
                  <Popover.Dropdown>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quisquam odit veniam exercitationem, ea saepe debitis
                      distinctio mollitia doloribus incidunt culpa?
                    </p>
                  </Popover.Dropdown>
                </Popover>
              </Table.Th>
              <Table.Th />
              {/* </Table.Th> */}
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </div>
      <section className={styles.sectionContainer}>
        <div>
          <p className={styles.leftPagination}>Showing</p>
          <div className={styles.sizeSelect}>
            <p>100</p>
            <FaAngleDown />
          </div>
          <p className={styles.leftPagination}>out of 100</p>
        </div>
        <div>
          <Pagination total={10} />;
        </div>
      </section>
    </>
  );
};

export default UserTable;
