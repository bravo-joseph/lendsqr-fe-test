export interface NavGroup {
  name: string;
  routes: NavRoute[];
}
export type NavIcon =
  | "dashboardIcon";

export interface NavRoute {
  name: string;
  path: string;
  icon: NavIcon;
}
