import React from "react";
import { NavIcon } from "../../_constants/types";
import { FaUserFriends } from "react-icons/fa";
import Image from "next/image";
import { FaRegHandshake } from "react-icons/fa";

interface Props {
  id: NavIcon;
}

const NavigaitonIcon: React.FC<Props> = ({ id }) => {
  switch (id) {
    case "usersIcon":
      return <FaUserFriends />;
    case "guarantorsIcon":
      return (
        <Image
          src="/images/icons/guarantorsIcon.png"
          alt=""
          width={16}
          height={12}
        />
      );
    case "loansIcon":
      return (
        <Image
          src="/images/icons/loansIcon.png"
          alt=""
          width={16}
          height={12}
        />
      );
    case "decisionsModelIcon":
      return <FaRegHandshake />;
    case "savingsIcon":
      return (
        <Image
          src="/images/icons/savingsIcon.png"
          alt=""
          width={16}
          height={12}
        />
      );
    case "loanRequestIcon":
      return (
        <Image
          src="/images/icons/loanRequestIcon.png"
          alt=""
          width={18}
          height={22}
        />
      );
    case "whiteListIcon":
      return (
        <Image
          src="/images/icons/whiteListIcon.png"
          alt=""
          width={16}
          height={12}
        />
      );
    case "karmaIcon":
      return (
        <Image
          src="/images/icons/karmaIcon.png"
          alt=""
          width={16}
          height={12}
        />
      );
    case "organizationIcon":
      return (
        <Image
          src="/images/icons/organizationsIcon.png"
          alt=""
          width={16}
          height={16}
        />
      );
    case "loanProductsIcon":
      return (
        <Image
          src="/images/icons/loanRequestIcon.png"
          alt=""
          width={16}
          height={16}
        />
      );
    case "savingsProductIcon":
      return (
        <Image
          src="/images/icons/savingsProductIcon.png"
          alt=""
          width={16}
          height={16}
        />
      );
    case "feesandChargingIcon":
      return (
        <Image
          src="/images/icons/feesandChargingIcon.png"
          alt=""
          width={16}
          height={16}
        />
      );
    case "transactionsIcon":
      return (
        <Image
          src="/images/icons/transactionsIcon.png"
          alt=""
          width={16}
          height={16}
        />
      );
    case "servicesIcon":
      return (
        <Image
          src="/images/icons/servicesIcon.png"
          alt=""
          width={16}
          height={16}
        />
      );
    case "serviceAccountIcon":
      return (
        <Image
          src="/images/icons/serviceAccountIcon.png"
          alt=""
          width={16}
          height={13}
        />
      );
    case "settlementsIcon":
      return (
        <Image
          src="/images/icons/settlementsIcon.png"
          alt=""
          width={16}
          height={13}
        />
      );
    case "reportsIcon":
      return (
        <Image
          src="/images/icons/reportsIcon.png"
          alt=""
          width={16}
          height={13}
        />
      );
    case "preferencesIcon":
      return (
        <Image
          src="/images/icons/preferencesIcon.png"
          alt=""
          width={16}
          height={13}
        />
      );
    case "feesandPricingIcon":
      return (
        <Image
          src="/images/icons/feesandPricingIcon.png"
          alt=""
          width={16}
          height={13}
        />
      );
    case "auditLogsIcon":
      return (
        <Image
          src="/images/icons/AuditLogsIcon.png"
          alt=""
          width={16}
          height={13}
        />
      );
    case "dashboardIcon":
      return (
        <Image
          src="/images/icons/dashboardIcon.png"
          alt=""
          width={16}
          height={14}
        />
      );
    case "userscardIcon":
      return (
        <Image
          src="/images/icons/userscardIcon.png"
          alt=""
          width={22}
          height={22}
        />
      );
    case "activeUsersIcon":
      return (
        <Image
          src="/images/icons/activeUsersIcon.png"
          alt=""
          width={20}
          height={17}
        />
      );
    case "userswithLoanIcon":
      return (
        <Image
          src="/images/icons/userswithLoanIcon.png"
          alt=""
          width={20}
          height={17}
        />
      );
    case "userswithsavingsIcon":
      return (
        <Image
          src="/images/icons/userswithsavingsIcon.png"
          alt=""
          width={20}
          height={17}
        />
      );    
    default:
      return null;
  }
};

export default NavigaitonIcon;
