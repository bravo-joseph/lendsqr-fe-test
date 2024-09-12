import { NavGroup } from "./types";

const ADMIN_NAV_GROUPS: NavGroup[] = [
  {
    name: 'Menu',
    routes: [
      {
        name: 'Dashboard',
        path: '/',
        icon: 'dashboard',
      },
    ],
  },
  {
    name: 'Human Resources',
    routes: [
      {
        name: 'Departments',
        path: '/departments',
        icon: 'stackIcon',
      },
      {
        name: 'Cost Centre',
        path: '/cost',
        icon: 'stackIcon',
      },
      {
        name: 'Employees',
        path: '/employee',
        icon: 'userGroupIcon',
      },
      {
        name: 'Leave Application',
        path: '/leave-application',
        icon: 'clipboardIcon',
      },
    ],
  },
  {
    name: 'Financials',
    routes: [
      {
        name: 'Payrolls',
        path: '/payroll',
        icon: 'cashIcon',
      },
      {
        name: 'Salary Components',
        path: '/salarycomponents',
        icon: 'salarycompIcon',
      },
      {
        name: 'Loans and Deductions',
        path: '/loans',
        icon: 'loanIcon',
      },
      {
        name: 'Claims',
        path: '/claim',
        icon: 'coinsHand',
      },
      {
        name: 'Pension',
        path: '/pension',
        icon: 'coinsHand',
      },
      {
        name: 'Payroll Reports',
        path: '/reports',
        icon: 'DocumentIcon',
      },
    ],
  },
  {
    name: 'Management',
    routes: [
      {
        name: 'User Access',
        path: '/user-access',
        icon: 'userAddIcon',
      },
      {
        name: 'Calendar',
        path: '/calender',
        icon: 'calendarIcon',
      },
      {
        name: 'Edit Requests',
        path: '/Pending',
        icon: 'userEditIcon'
      },
      {
        name: 'Settings',
        path: '/settings',
        icon: 'settingsIcon',
      },
    ],
  },
  {
    name: 'Profile',
    routes: [
      {
        name: 'My Profile',
        path: '/profile',
        icon: 'userIcon',
      },
      {
        name: 'Chat',
        path: '/chat',
        icon: 'messageIcon',
      },
      {
        name: 'Others',
        path: '/others',
        icon: 'OthersIcon',
      },      
      {
        name: 'Activity Logs',
        path: '/logs',
        icon: 'settingsIcon',
      },
    ],
  },
];
export default ADMIN_NAV_GROUPS;
