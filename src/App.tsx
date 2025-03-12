import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Layout from "./layout/Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./auth/Login";
import UserManagement from "./pages/userManagement/UserManagement";
import Analytics from "./pages/analytic/Analytics";
import "../src/constants/fonts.css";
import MarketData from "./pages/marketData/MarketData";
import Security from "./pages/security/Security";
import UserBalance from "./pages/UserBalance/UserBalance";
import TokenUser from "./pages/UserBalance/portions/TokenUser";
import Setting from "./pages/setting/Setting";
import AdminDetail from "./pages/setting/portions/admin/AdminDetail";
import RoleManagement from "./pages/setting/portions/admin/RoleManagement";
import Support from "./pages/support/Support";
import Referral from "./pages/Referral/Referral";
import ReferralUser from "./pages/Referral/portions/ReferralUser";
import PayoutRules from "./pages/Referral/portions/PayoutRules";
import Notification from "./pages/notifiaction/Notification";
import Notification_User from "./pages/notifiaction/Notification_User";
import InAppNotifications from "./pages/notifiaction/InAppNotifications";
import InAppBanners from "./pages/notifiaction/InAppBanners";
import FeeManagement from "./pages/feeManagement/FeeManagement";
import ExchangeRate from "./pages/feeManagement/ExchangeRate";
import MinimumRate from "./pages/feeManagement/MinimumRate";
import Kyc from "./pages/kyc&compliance/Kyc";
import TradeLimit from "./pages/kyc&compliance/TradeLimit";
import AmlMonitoring from "./pages/kyc&compliance/components/AmlMonitoring";
import AccountDetail from "./pages/userManagement_Subpages/account_detail/AccountDetail";
import BankDetail from "./pages/userManagement_Subpages/account_detail/BankDetail";
import AccountNotification from "./pages/userManagement_Subpages/account_detail/AccountNotification";
import AccountTransactions from "./pages/userManagement_Subpages/All_transactions/AccountTransactions";
import Market from "./pages/market/Market";
import MarketCreate from "./pages/market/MarketCreate";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import VirtualCard from "./pages/wallets/virtual_card/VirtualCard";
import ViewWallet from "./pages/wallets/virtual_card/ViewWallet";
import ViewWallet_ETH from "./pages/wallets/virtual_card/ViewWallet_ETH";
import MasterCard from "./pages/wallets/master_card/MasterCard";
import Transactions from "./pages/transactions/Transactions";
import MasterCard_ETh from "./pages/wallets/master_card/MasterCard_ETh";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="MarketData" element={<MarketData />} />
            <Route path="security" element={<Security />} />
            <Route path="report&analytics" element={<Analytics />} />
            <Route path="support" element={<Support />} />

            {/* market */}
            <Route path="market" element={<Market />} />
            <Route path="market/create" element={<MarketCreate />} />

            <Route path="Transactions" element={<Transactions />} />

            {/* wallets */}
            <Route path="wallet/virtual" element={<VirtualCard />} />
            <Route
              path="wallet/virtual/:username/details"
              element={<ViewWallet />}
            />
            <Route
              path="wallet/virtual/:username/Eth/details"
              element={<ViewWallet_ETH />}
            />
            <Route path="wallet/master" element={<MasterCard />} />
            <Route path="wallet/master/Eth" element={<MasterCard_ETh />} />

            {/* user management  */}
            <Route path="user/management" element={<UserManagement />} />
            <Route
              path="user/management/customer/:id/detail"
              element={<AccountDetail />}
            />
            <Route
              path="user/management/customer/:username/bank/detail"
              element={<BankDetail />}
            />
            <Route
              path="user/management/customer/:username/notifications"
              element={<AccountNotification />}
            />
            <Route
              path="user/management/customer/:username/transactions"
              element={<AccountTransactions />}
            />

            {/* kyc & compliance */}
            <Route path="kyc&compliance/kyc" element={<Kyc />} />
            <Route
              path="kyc&compliance/kyc/Trade/limit"
              element={<TradeLimit />}
            />
            <Route
              path="kyc&compliance/amcMonitoring"
              element={<AmlMonitoring />}
            />

            {/* fee management */}
            <Route path="fee/management" element={<FeeManagement />} />
            <Route path="fee/exchangerate" element={<ExchangeRate />} />
            <Route path="fee/minimumtrade" element={<MinimumRate />} />

            {/* nodification */}
            <Route path="nodification" element={<Notification />} />
            <Route
              path="nodification/:username"
              element={<Notification_User />}
            />
            <Route
              path="nodification/inapp/"
              element={<InAppNotifications />}
            />
            <Route path="nodification/Banners/" element={<InAppBanners />} />

            {/* referral */}
            <Route path="refferal/management" element={<Referral />} />
            <Route
              path="refferal/management/:username"
              element={<ReferralUser />}
            />
            <Route
              path="refferal/management/marketing/payout/rule"
              element={<PayoutRules />}
            />

            {/* user balance */}
            <Route path="userbalances" element={<UserBalance />} />
            <Route path="userbalances/:tokenName" element={<TokenUser />} />

            {/* settings */}
            <Route path="Settings/:SettingPage" element={<Setting />} />
            <Route
              path="Settings/:SettingPage/:username"
              element={<AdminDetail />}
            />
            <Route
              path="Settings/:SettingPage/role/management"
              element={<RoleManagement />}
            />
          </Route>
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;