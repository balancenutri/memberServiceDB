import { Suspense, lazy } from "react";
import Home from "@/pages/Home";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
const PushNotifications = lazy(() => import("./pages/PushNotifications"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Navigate to="/memberService" replace />} />
          <Route index path="/memberService" element={<Home />} />
          <Route
            path="/memberService/pushNotification"
            element={<PushNotifications />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
