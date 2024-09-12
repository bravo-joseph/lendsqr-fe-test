/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { NavGroup } from "../../_constants/types";
import NavButton from "../navigation-link";
import { useDisclosure } from "@mantine/hooks";
import NavigaitonIcon from "../navigation-icons";
import { Button } from "@mantine/core";

  interface Props {
    navGroups: NavGroup[];
    prefix?: string;
  }

const AdminNavigationList:React.FC<Props> = ({navGroups, prefix}) => {
  const [, { toggle }] = useDisclosure();
  return (
    <div className="flex flex-col justify-between h-full relative z-0">
      <div className="h-full z-0">
        <div className="w-full flex justify-start px-6">
          <img
            style={{ width: "100px", height: "100px", objectFit: "contain" }}
            className="object-cover w-[100px] h-[100px]"
            src={"/assets/webp/wisewage.png"}
            alt="company logo"
          />
        </div>
        <ul
          style={{ height: "calc(100% - 100px)" }}
          className="md:mt-0 scrollbar-thin overflow-y-auto px-1"
        >
          {navGroups.map((group) => (
            <li key={group.name}>
              <p className="px-6 p-2 mt-6 text-black/30 font-[500]">
                {group.name}
              </p>
              <ul>
                {group.routes.map(({ icon, ...r }) => (
                  <li key={r.name}>
                    <NavButton
                      onClick={toggle}
                      pathPrefix={prefix}
                      icon={<NavigaitonIcon id={icon} />}
                      href={r.path}
                    >
                      {r.name}
                    </NavButton>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Button
        className="bg-[#FF6161]/30 flex items-center rounded-3xl py-6 px-2 justify-start gap-2 hover:bg-[#FF6161]/80 text-[#FF6161] relative bottom-0.5 w-full z-10"
        // onClick={handleLogout}
      >
        {/* <LogoutIcon fontSize={22} />  */}
        <span className="text-lg">Logout</span>
      </Button>
    </div>
  );
};

export default AdminNavigationList;
