import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ClerkProvider } from "@clerk/clerk-react";
import { createTheme, ThemeProvider } from "@mui/material";
import generateThemeOptions from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/shared/Loader";
import { Provider } from "react-redux";
import { store } from "../redux/store";

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Add your Clerk Publishable Key to the .env.local file");
}
const theme = createTheme(
  generateThemeOptions({
    mode: "light",
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
      }}
    >
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <ClerkProvider
            publishableKey={PUBLISHABLE_KEY}
            afterSignOutUrl="/signin"
            signInFallbackRedirectUrl="/"
            signInUrl="/signin"
          >
            <Suspense fallback={<Loader />}>
              <App />
            </Suspense>
          </ClerkProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
