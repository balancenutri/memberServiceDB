import { Suspense, lazy } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Loader from "./components/ui/Loader";
const PushNotifications = lazy(() => import("./pages/PushNotifications"));
const Home = lazy(() => import("@/pages/Home"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
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
