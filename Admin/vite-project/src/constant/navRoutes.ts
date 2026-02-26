export const navLinks = [
  {
    name: "Dashboard",
    path: "/",
    icon: "home",
    children: [],
  }, {
    name: "Brokers",
    path: "",
    icon: "group_add",
    children: [
      { name: "List", path: "/broker-list", icon: "low_priority" },
      { name: "A Book", path: "/Orders/broker/A-Book", icon: "low_priority" },
      { name: "B Book", path: "/Orders/broker/B-Book", icon: "low_priority" },
    ]
  },
  {
    name: "Users",
    path: "#",
    icon: "group_add",
    children: [
      { name: "All", path: "/All-Users", icon: "person_2" },
      { name: "Verified", path: "/verified-users", icon: "person_check" },
      { name: "Unverified", path: "/Unverified-users", icon: "person_check" },
      { name: "Trading Account", path: "/Trading-User", icon: "account_balance_wallet" },
    ],
  },
  {
    name: "Orders",
    path: "#",
    icon: "orders",
    children: [
      { name: "A Book", path: "/Orders/user/A-Book", icon: "low_priority" },
      { name: "B Book", path: "/Orders/user/B-Book", icon: "low_priority" },
      // { name: "A Book Margin", path: "/Orders/A-Book-Margin", icon: "low_priority" },
      // { name: "B Book Margin", path: "/Orders/B-Book-Margin", icon: "low_priority" },
    ],
  },
  {
    name: "Order Details",
    path: "#",
    icon: "receipt_long",
    children: [
      { name: "All", path: "/Order-Details/All", icon: "low_priority" },
      { name: "Open", path: "/Order-Details/Open", icon: "low_priority" },
      { name: "Closed", path: "/Order-Details/Closed", icon: "low_priority" },

    ],
  },
  {
    name: "Deposit",
    path: "#",
    icon: "account_balance",
    children: [
      { name: "Online Pending", path: "/pending-deposit/online", icon: "savings" },
      { name: "Manual Pending", path: "/pending-deposit/manual", icon: "savings" },
      { name: "Online List", path: "/deposit-list/online", icon: "savings" },
      { name: "Manual List", path: "/deposit-list/manual", icon: "savings" },
      { name: "Deposit Bank Details", path: "/deposit-bank-details", icon: "savings" },
    ],
  },
  {
    name: "Withdraw",
    path: "#",
    icon: "account_balance",
    children: [
      { name: "Pending Withdraw", path: "/pending-withdraw", icon: "local_atm" },
      { name: "Withdraw List", path: "/withdraw-list", icon: "local_atm" },
    ]
  },
  {
    name: "Savings",
    path: "#",
    icon: "finance",
    children: [
      { name: "Package", path: "/saving-package", icon: "local_atm" },
      { name: "Investment", path: "/saving-investment-list", icon: "local_atm" },
    ]
  },
  {
    name: "Bonus",
    path: "#",
    icon: "rewarded_ads",
    children: [
      { name: "bonus list", path: "/bonus", icon: "local_atm" },
      { name: "Reedem list", path: "/redeem-bonus", icon: "local_atm" },
    ]
  },
  {
    name: "Support",
    path: "#",
    icon: "linked_services",
    children: [
      { name: "Ticket", path: "/support-help-ticket/pending", icon: "linked_services" },
    ]
  },
  {
    name: "Services",
    path: "#",
    icon: "linked_services",
    children: [
      { name: "Email", path: "/smtp-Provider", icon: "local_atm" },
    ]
  },
  {
    name: "Funds Manager",
    path: "#",
    icon: "payments",
    children: [
      { name: "Copy Trading", path: "/follower/copy", icon: "low_priority" },
      { name: "Manage MAM", path: "/follower/Mam", icon: "low_priority" },
      { name: "Manage PAMM", path: "/follower/pamm", icon: "low_priority" },
    ],
  },
  // {
  //   name: "Leads",
  //   path: "#",
  //   icon: "crown",
  //   children: [
  //     { name: "Manage Leads", path: "/deposit", icon: "low_priority" },
  //     { name: "Lead Report", path: "/transfer", icon: "low_priority" },
  //     { name: "Lead Type", path: "/withdraw", icon: "low_priority" },
  //   ],
  // },
  {
    name: "Manager/Group",
    path: "#",
    icon: "account_balance",
    children: [
      // { name: "User Management", path: "/User-Management", icon: "low_priority" },
      { name: "Role Permission", path: "/role-management", icon: "low_priority" },
      // { name: "Manager", path: "/User-Management", icon: "low_priority" },
      { name: "User Group", path: "/company-user-group", icon: "low_priority" },
      { name: "Symbol", path: "/symbol-details", icon: "low_priority" },
      // { name: "Bonus (User Credit)", path: "/User-Management", icon: "low_priority" },
    ],
  },

  {
    name: "Liquidity",
    path: "#",
    icon: "account_balance",
    children: [
      { name: "LP Transaction", path: "/User-Management", icon: "low_priority" },
      { name: "LP Brokerage", path: "/User-Management", icon: "low_priority" },
      { name: "Liquidity Hub Payment", path: "/User-Management", icon: "low_priority" },
    ],
  },
  // {
  //   name: "Reports",
  //   path: "#",
  //   icon: "account_balance",
  //   children: [
  //     { name: "User Order", path: "/User-Management", icon: "low_priority" },
  //     { name: "Refer Report", path: "/User-Management", icon: "low_priority" },
  //     { name: "Order Edit", path: "/User-Management", icon: "low_priority" },
  //     { name: "User Transaction", path: "/User-Management", icon: "low_priority" },
  //   ],
  // },
  {
    name: "Setting",
    path: "/setting",
    icon: "rule_settings",
    children: [],
  }
];
