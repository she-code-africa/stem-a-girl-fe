import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  OutreachPage,
  StemClubs,
  ContactUsPage,
  CodePlaygroundPage,
  Courses,
  CoursePage,
} from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

import { Suspense } from "react";
import PageLoader from "./components/loaders/PageLoader";
import CreateAccount from "./pages/create-account";
import VerifyEmail from "./pages/verify-email";
import ConsentPageComponent from "./pages/consent-page";
import SignInPage from "./pages/sign-in";

const queryClient = new QueryClient();

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Check if the current protocol is HTTP
    if (process.env.REACT_APP_NODE_ENV === "production") {
      if (window.location.protocol === "http:") {
        // Redirect to the equivalent URL with HTTPS
        window.location.href = `https://${window.location.hostname}${window.location.pathname}`;
      }
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/outreach" element={<OutreachPage />} />
          <Route path="/course/:id" element={<CoursePage />} />
          <Route path="/register" element={<CreateAccount />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/consent" element={<ConsentPageComponent />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/stem-clubs" element={<StemClubs />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/code-playground" element={<CodePlaygroundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
