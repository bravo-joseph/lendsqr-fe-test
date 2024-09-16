export interface NavGroup {
  name: string;
  routes: NavRoute[];
}
export type NavIcon =
  | "usersIcon"
  | "guarantorsIcon"
  | "loansIcon"
  | "decisionsModelIcon"
  | "savingsIcon"
  | "loanRequestIcon"
  | "whiteListIcon"
  | "karmaIcon"
  | "organizationIcon"
  | "loanProductsIcon"
  | "savingsProductIcon"
  | "feesandChargingIcon"
  | "transactionsIcon"
  | "servicesIcon"
  | "serviceAccountIcon"
  | "settlementsIcon"
  | "reportsIcon"
  | "preferencesIcon"
  | "feesandPricingIcon"
  | "auditLogsIcon"
  | "dashboardIcon"
  | "userscardIcon"
  | "activeUsersIcon"
  | "userswithLoanIcon"
  | "userswithsavingsIcon"
  | "switchOrganizationIcon"
  | "switchOrginazationIconDropdown"
  | "systemsMessagesIcon";
  

export interface NavRoute {
  name: string;
  path: string;
  icon: NavIcon;
  leftsection?: NavIcon;
}
