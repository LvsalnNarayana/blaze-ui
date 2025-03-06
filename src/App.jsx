import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Auth/Signin";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
import TempLayout from "./layouts/TempLayout";
import Signup from "./pages/Auth/Signup";
import ConnectMT5 from "./pages/ConnectMT5";
import AccountLayout from "./layouts/AccountLayout";
import Referrals from "./pages/Account/Referrals";
import Sessions from "./pages/Account/Sessions";
import Settings from "./pages/Account/Settings";
import Profile from "./pages/Account/Profile";
import Invoices from "./pages/Account/Invoices";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route
        path="/signin"
        element={
          <TempLayout>
            <Signin />
          </TempLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <TempLayout>
            <Signup />
          </TempLayout>
        }
      />
      <Route element={<AuthLayout />}>
        <Route path="/account" element={<AccountLayout />}>
          <Route path="profile" element={<Profile />} />
          <Route path="referrals" element={<Referrals />} />
          <Route path="sessions" element={<Sessions />} />
          <Route path="settings" element={<Settings />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>
        <Route
          path="/connect-mt5"
          element={
            <TempLayout>
              <ConnectMT5 />
            </TempLayout>
          }
        />
        <Route
          path="/"
          element={
            <TempLayout>
              <Dashboard />
            </TempLayout>
          }
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
