import React, { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoadingPage from "../components/Loading";
import FollowerList from "../components/FollowerCount";
import BrokerList from "../components/BrokerList";
const SymbolInfoList = lazy(() => import("../components/SymbolInfo"))
const AdminDashboard = lazy(() => import("../components/Dashboard"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));
const Login = lazy(() => import("../components/Login"));
const UnverifyUsers = lazy(() => import("../components/UnverifiedUsers"));
const VerifyUsers = lazy(() => import("../components/VerifiedUsers"));
const AllUsers = lazy(() => import("../components/AllUsers"));
const TradeAccountUser = lazy(() => import("../components/TradeAccount"));
const ABook = lazy(() => import("../components/Abook"));
const Bbook = lazy(() => import("../components/Bbook"));
const MarginABook = lazy(() => import("../components/MarginAbook"));
const MarginBBook = lazy(() => import("../components/MarginBbook"));
const OrderDetailsCategoryWise = lazy(
  () => import("../components/OrderDetails")
);
const OrderList = lazy(() => import("../components/OrderList"));
const Setting = lazy(() => import("../components/Setting"));
const DepositList = lazy(() => import("../components/DepositList"));
const WithdrawList = lazy(() => import("../components/Withdrawlist"));
const PendingWithdrawList = lazy(() => import("../components/PendingWithdraw"));
const PendingDepositList = React.lazy(() => import('../components/PendingDeposit'));
const CompanyMerchantList = React.lazy(() => import('../components/ComapanyMerchant'));
const SymbolDetailList = React.lazy(() => import("../components/SymbolDetail"))
const CompanyGroup = React.lazy(() => import("../components/ComPanyGroup"))
const ReferLevelComision = React.lazy(() => import("../components/ReferLevel"));
const VerifyOtp = React.lazy(() => import("../components/VerifyOtp"));
const SmtpProvider = React.lazy(() => import("../components/SmtpProvider"));
const SavingPackageList = React.lazy(() => import("../components/PackageList"));
const BonusList = React.lazy(() => import("../components/Bonus"));
const SavingInvestmentList = React.lazy(() => import("../components/SavingInvestment"));
const BonusRedeemList = React.lazy(() => import("../components/BonusRedeemList"));
const HelpTicket = React.lazy(() => import("../components/HelpTicket"));
const withSuspense = <P extends object>(
  Component: React.FC<P>,
  props?: Partial<P>
) => (
  <Suspense fallback={<LoadingPage />}>
    <Component {...(props as P)} />
  </Suspense>
);

export const routerList = createBrowserRouter([
  {
    path: "*",
    element: withSuspense(PageNotFound),
  },
  {
    path: "/login",
    element: withSuspense(Login),
  },
  {
    path: "/login-otp",
    element: withSuspense(VerifyOtp)
  },
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "/",
        element: withSuspense(AdminDashboard),
      },
      {
        path: "all-users",
        element: withSuspense(AllUsers),
      },
      {
        path: "/Unverified-users",
        element: withSuspense(UnverifyUsers),
      },
      {
        path: "/verified-users",
        element: withSuspense(VerifyUsers),
      },
      {
        path: "/Trading-User/:user_id?/:email_id?",
        element: withSuspense(TradeAccountUser),
      },
      {
        path: "/Orders/:format/A-Book/:broker_id?/:userName?",
        element: withSuspense(ABook),
      },
      {
        path: "/Orders/:format/B-Book/:broker_id?/:userName?",
        element: withSuspense(Bbook),
      },
      {
        path: "/Orders/A-Book-Margin",
        element: withSuspense(MarginABook),
      },
      {
        path: "/Orders/B-Book-Margin",
        element: withSuspense(MarginBBook),
      },
      {
        path: "/Order-Details/All",
        element: withSuspense(OrderDetailsCategoryWise),
      },
      {
        path: "/Order-Details/Open",
        element: withSuspense(OrderDetailsCategoryWise),
      },
      {
        path: "/Order-Details/Closed",
        element: withSuspense(OrderDetailsCategoryWise),
      },
      {
        path: "/Order-list/:accountID?/:query",
        element: withSuspense(OrderList),
      },
      {
        path: "/setting",
        element: withSuspense(Setting),
      },
      {
        path: "/deposit-list/:mode",
        element: withSuspense(DepositList)
      }, {
        path: "/pending-deposit/:mode",
        element: withSuspense(PendingDepositList)
      },
      {
        path: "/pending-withdraw",
        element: withSuspense(PendingWithdrawList)
      },
      {
        path: "/withdraw-list",
        element: withSuspense(WithdrawList)
      }, {
        path: "/deposit-bank-details",
        element: withSuspense(CompanyMerchantList)
      },
      {
        path: "/symbol-details",
        element: withSuspense(SymbolDetailList)
      },
      {
        path: "/company-user-group/:_id?/:type?",
        element: withSuspense(CompanyGroup)
      },
      {
        path: "/symbol-info/:group_id?/:_id?/:type?",
        element: withSuspense(SymbolInfoList)
      },
      {
        path: "/refer-commision-list/:group_id",
        element: withSuspense(ReferLevelComision)
      }, {
        path: "/follower/copy",
        element: withSuspense(FollowerList, { mode: "Copy" })
      },
      {
        path: "/follower/Mam",
        element: withSuspense(FollowerList, { mode: "MAM" })
      },
      {
        path: "/follower/pamm",
        element: withSuspense(FollowerList, { mode: "PAMM" })
      },
      {
        path: "/follower-list/:type/:user_id",
        element: withSuspense(FollowerList, { mode: "PAMM" })
      },
      {
        path: "/broker-list",
        element: withSuspense(BrokerList)
      }, {
        path: "/role-management",
        element: withSuspense(BrokerList, { isManagmentRole: true })
      },
      {
        path: "/saving-package",
        element: withSuspense(SavingPackageList)
      },
      {
        path: "/saving-investment-list",
        element: withSuspense(SavingInvestmentList)
      },
      {
        path: "/smtp-Provider",
        element: withSuspense(SmtpProvider)
      },
      {
        path: "/bonus",
        element: withSuspense(BonusList)
      },
      {
        path: "/redeem-bonus",
        element: withSuspense(BonusRedeemList)
      },
      {
        path: "/support-help-ticket/:status",
        element: withSuspense(HelpTicket)
      }
    ],
  },
]);
