import { lazy } from "react";
import Home from "@/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const PushNotifications = lazy(() => import("./pages/PushNotifications"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/push-notifications" element={<PushNotifications />} />
      </Routes>
    </Router>
  );
};

export default App;
