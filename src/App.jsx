import { Routes, Route } from "react-router-dom";
import Signin from "./pages/Auth/Signin";
import Dashboard from "./pages/Dashboard";
import AuthLayout from "./layouts/AuthLayout";
import TempLayout from "./layouts/TempLayout";
import Signup from "./pages/Auth/Signup";
import ConnectMT5 from "./pages/ConnectMT5";


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
    </Routes>
  );
}

export default App;
