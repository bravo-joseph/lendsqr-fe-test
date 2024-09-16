import { NavGroup } from "./types";

const ADMIN_NAV_GROUPS: NavGroup[] = [
  {
    name: "",
    routes: [
      {
        name: "Switch Organization",
        path: "/switch-organization",
        icon: "switchOrganizationIcon",
        leftsection: "switchOrginazationIconDropdown"
      },         
    ],
  },
  {
    name: "",
    routes: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: "dashboardIcon",
      },      
    ],
  },
  {
    name: "Customers",
    routes: [
      {
        name: "users",
        path: "/users",
        icon: "usersIcon",
      },
      {
        name: "Guarantors",
        path: "/guarantors",
        icon: "guarantorsIcon",
      },
      {
        name: "Loans",
        path: "/loans",
        icon: "loansIcon",
      },
      {
        name: "Decision Models",
        path: "/decision-models",
        icon: "decisionsModelIcon",
      },
      {
        name: "Savings",
        path: "/savings",
        icon: "savingsIcon",
      },
      {
        name: "Loan Requests",
        path: "/loan-requests",
        icon: "loanRequestIcon",
      },
      {
        name: "whiteList",
        path: "/whitelist",
        icon: "whiteListIcon",
      },
      {
        name: "Karma",
        path: "/karma",
        icon: "karmaIcon",
      },
    ],
  },
  {
    name: "Businesses",
    routes: [
      {
        name: "Organization",
        path: "/organization",
        icon: "organizationIcon",
      },
      {
        name: "Loan Products",
        path: "/loan-products",
        icon: "loanProductsIcon",
      },
      {
        name: "Savings Products",
        path: "/savings-product",
        icon: "savingsProductIcon",
      },
      {
        name: "Fees and Charges",
        path: "/savings-product",
        icon: "feesandChargingIcon",
      },
      {
        name: "Transactions",
        path: "/transactions",
        icon: "transactionsIcon",
      },
      {
        name: "Services",
        path: "/services",
        icon: "servicesIcon",
      },
      {
        name: "Service Account",
        path: "/service-accounts",
        icon: "serviceAccountIcon",
      },
      {
        name: "Settlements",
        path: "/settlements",
        icon: "settlementsIcon",
      },
      {
        name: "Reports",
        path: "/reports",
        icon: "reportsIcon",
      },
    ],
  },
  {
    name: "Settings",
    routes: [
      {
        name: "Preferences",
        path: "/preferences",
        icon: "preferencesIcon",
      },
      {
        name: "Fees and Pricing",
        path: "/fees",
        icon: "feesandPricingIcon",
      },
      {
        name: "Audit Logs",
        path: "/preferences",
        icon: "auditLogsIcon",
      },
      {
        name: "Systems Messages",
        path: "/messages",
        icon: "systemsMessagesIcon",
      },
    ],
  },  
];
export default ADMIN_NAV_GROUPS;
