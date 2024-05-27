import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage, OutreachPage, StemClubs, ActivitiesPage } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/outreach" element={<OutreachPage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/stem-clubs" element={<StemClubs />} />
      </Routes>
    </>
  );
}

export default App;
