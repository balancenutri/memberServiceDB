import { lazy } from "react";
import Home from "@/pages/Home";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const PushNotifications = lazy(() => import("./pages/PushNotifications"));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/memberService" element={<Home />} />
        <Route
          path="/memberService/push-notifications"
          element={<PushNotifications />}
        />
      </Routes>
    </Router>
  );
};

export default App;
