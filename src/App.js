import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  HomePage,
  OutreachPage,
  StemClubs,
  CodingPage,
  RoboticsPage,
  GameDevelopment,
  ContactUsPage,
} from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/outreach" element={<OutreachPage />} />
        <Route path="/activities/coding" element={<CodingPage />} />
        <Route path="/activities/robotics" element={<RoboticsPage />} />
        <Route
          path="/activities/game-development"
          element={<GameDevelopment />}
        />
        <Route path="/stem-clubs" element={<StemClubs />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
