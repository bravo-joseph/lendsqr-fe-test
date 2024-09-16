import { Pagination, Popover, Table } from "@mantine/core";
import { IoFilter } from "react-icons/io5";
import React from "react";
import styles from "./index.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FiUserX } from "react-icons/fi";
import { User } from "@/app/services/version1/response";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

interface Props {
  data: User[];
  isloading: boolean;
  handlePageChange: (newPage: number) => void;
  totalPages: number;
}

const UserTable: React.FC<Props> = ({
  data,
  isloading,
  handlePageChange,
  totalPages,
}) => {
  const router = useRouter();
  const rows = data.map((element) => (
    <Table.Tr key={element.personalInformation.orgainzarionName}>
      <Table.Td>{element.personalInformation.orgainzarionName}</Table.Td>
      <Table.Td>{element.personalInformation.userName}</Table.Td>
      <Table.Td>{element.personalInformation.email}</Table.Td>
      <Table.Td>{element.personalInformation.phoneNumber}</Table.Td>
      <Table.Td>
        {format(
          element.personalInformation.dateJoioned,
          "MMMM dd, yyyy hh:mm a"
        )}
      </Table.Td>
      <Table.Td>
        <p
          className={
            element.personalInformation.status === "Active"
              ? styles.Active
              : element.personalInformation.status === "Inactive"
              ? styles.InActive
              : ""
          }
        >
          {element.personalInformation.status}
        </p>
      </Table.Td>
      <Table.Td>
        <Popover width={180} withArrow shadow="md">
          <Popover.Target>
            <div>
              <BsThreeDotsVertical height={20} width={20} fontSize={"20px"} />
            </div>
          </Popover.Target>
          <Popover.Dropdown>
            <div className={styles.userElipsePopover}>
              <FaRegEye />
              <p
                onClick={() => {
                  router.replace(
                    `/admin/users/${element.personalInformation.email}`
                  );
                }}
              >
                View Details
              </p>
            </div>
            <div className={styles.userElipsePopover}>
              <FiUserX />
              <p>Blacklist User</p>
            </div>
            <div className={styles.userElipsePopover}>
              <FiUserX />
              <p>Activate User</p>
            </div>
          </Popover.Dropdown>
        </Popover>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <>
      <div className={styles.container}>
        <Table.ScrollContainer minWidth={500}>
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
                          // placeholder="
                          name=""
                          id=""
                        ></select>
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Username</p>
                        <input
                          placeholder="Username"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Email</p>
                        <input
                          placeholder="Email"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Date</p>
                        <input
                          type="date"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
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
                        <select className={styles.popoverSelect} name="" id="">
                          <option value="Active">Active</option>
                          <option value="InActive">InActive</option>
                          <option value="BlackListed">BlackListed</option>
                          <option value="BlackListed">Pending</option>
                        </select>
                      </div>
                      <div className={styles.filterActionDiv}>
                        <button>Reset</button>
                        <button>Filter</button>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </Table.Th>
                <Table.Th>
                  <Popover width={270} withArrow shadow="md">
                    <Popover.Target>
                      <div className={styles.tableHeader}>
                        <p>Username</p>
                        <IoFilter />
                      </div>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <div className={styles.popoverDiv}>
                        <p>Organisation</p>
                        <select
                          className={styles.popoverSelect}
                          // placeholder="
                          name=""
                          id=""
                        ></select>
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Username</p>
                        <input
                          placeholder="Username"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Email</p>
                        <input
                          placeholder="Email"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Date</p>
                        <input
                          type="date"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
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
                        <select className={styles.popoverSelect} name="" id="">
                          <option value="Active">Active</option>
                          <option value="InActive">InActive</option>
                          <option value="BlackListed">BlackListed</option>
                          <option value="BlackListed">Pending</option>
                        </select>
                      </div>
                      <div className={styles.filterActionDiv}>
                        <button>Reset</button>
                        <button>Filter</button>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </Table.Th>
                <Table.Th>
                  <Popover width={270} withArrow shadow="md">
                    <Popover.Target>
                      <div className={styles.tableHeader}>
                        <p>Email</p>
                        <IoFilter />
                      </div>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <div className={styles.popoverDiv}>
                        <p>Organisation</p>
                        <select
                          className={styles.popoverSelect}
                          // placeholder="
                          name=""
                          id=""
                        ></select>
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Username</p>
                        <input
                          placeholder="Username"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Email</p>
                        <input
                          placeholder="Email"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Date</p>
                        <input
                          type="date"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
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
                        <select className={styles.popoverSelect} name="" id="">
                          <option value="Active">Active</option>
                          <option value="InActive">InActive</option>
                          <option value="BlackListed">BlackListed</option>
                          <option value="BlackListed">Pending</option>
                        </select>
                      </div>
                      <div className={styles.filterActionDiv}>
                        <button>Reset</button>
                        <button>Filter</button>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </Table.Th>
                <Table.Th>
                  <Popover width={270} withArrow shadow="md">
                    <Popover.Target>
                      <div className={styles.tableHeader}>
                        <p>Phone Number</p>
                        <IoFilter />
                      </div>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <div className={styles.popoverDiv}>
                        <p>Organisation</p>
                        <select
                          className={styles.popoverSelect}
                          // placeholder="
                          name=""
                          id=""
                        ></select>
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Username</p>
                        <input
                          placeholder="Username"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Email</p>
                        <input
                          placeholder="Email"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Date</p>
                        <input
                          type="date"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
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
                        <select className={styles.popoverSelect} name="" id="">
                          <option value="Active">Active</option>
                          <option value="InActive">InActive</option>
                          <option value="BlackListed">BlackListed</option>
                          <option value="BlackListed">Pending</option>
                        </select>
                      </div>
                      <div className={styles.filterActionDiv}>
                        <button>Reset</button>
                        <button>Filter</button>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </Table.Th>
                <Table.Th>
                  <Popover width={270} withArrow shadow="md">
                    <Popover.Target>
                      <div className={styles.tableHeader}>
                        <p>Date Joined</p>
                        <IoFilter />
                      </div>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <div className={styles.popoverDiv}>
                        <p>Organisation</p>
                        <select
                          className={styles.popoverSelect}
                          // placeholder="
                          name=""
                          id=""
                        ></select>
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Username</p>
                        <input
                          placeholder="Username"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Email</p>
                        <input
                          placeholder="Email"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Date</p>
                        <input className={styles.popoverSelect} name="" id="" />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Phone Number</p>
                        <input
                          placeholder="Phone Number"
                          type="date"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Status</p>
                        <select className={styles.popoverSelect} name="" id="">
                          <option value="Active">Active</option>
                          <option value="InActive">InActive</option>
                          <option value="BlackListed">BlackListed</option>
                          <option value="BlackListed">Pending</option>
                        </select>
                      </div>
                      <div className={styles.filterActionDiv}>
                        <button>Reset</button>
                        <button>Filter</button>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </Table.Th>
                <Table.Th>
                  <Popover width={270} withArrow shadow="md">
                    <Popover.Target>
                      <div className={styles.tableHeader}>
                        <p>Status</p>
                        <IoFilter />
                      </div>
                    </Popover.Target>
                    <Popover.Dropdown>
                      <div className={styles.popoverDiv}>
                        <p>Organisation</p>
                        <select
                          className={styles.popoverSelect}
                          // placeholder="
                          name=""
                          id=""
                        ></select>
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Username</p>
                        <input
                          placeholder="Username"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Email</p>
                        <input
                          placeholder="Email"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Date</p>
                        <input className={styles.popoverSelect} name="" id="" />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Phone Number</p>
                        <input
                          placeholder="Phone Number"
                          type="date"
                          className={styles.popoverSelect}
                          name=""
                          id=""
                        />
                      </div>
                      <div className={styles.popoverDiv}>
                        <p>Status</p>
                        <select className={styles.popoverSelect} name="" id="">
                          <option value="Active">Active</option>
                          <option value="InActive">InActive</option>
                          <option value="BlackListed">BlackListed</option>
                          <option value="BlackListed">Pending</option>
                        </select>
                      </div>
                      <div className={styles.filterActionDiv}>
                        <button>Reset</button>
                        <button>Filter</button>
                      </div>
                    </Popover.Dropdown>
                  </Popover>
                </Table.Th>
                <Table.Th />
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>{!isloading && rows}</Table.Tbody>
          </Table>
          {isloading && (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p>Data Loading...</p>
            </div>
          )}
        </Table.ScrollContainer>
      </div>
      <section className={styles.sectionContainer}>
        <div>
          <p className={styles.leftPagination}>Showing</p>
          <div className={styles.sizeSelect}>
            <p>10</p>            
            <FaAngleDown />
          </div>
          <p className={styles.leftPagination}>out of 100</p>
        </div>
        <div>
          <Pagination
            total={totalPages}
            onChange={(value) => {
              handlePageChange(value);
            }}
            styles={{
              control: {
                backgroundColor: "transparent",
                color: "black",
                borderColor: "gray",
              },
            }}
          />
        </div>
      </section>
    </>
  );
};

export default UserTable;
