import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Wincome from "./Pages/Wincome";
import NotFoundPage from "./Pages/NotFoundPage";
import Register from "./Pages/Register";
import ChangePassword from "./Pages/ChangePassword";
import PrivateRoute from "./components/PrivateRoute"
import UserProvider from "./Context/UserContext";

function App() {
  return (
    <UserProvider>
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/wincome" element={<PrivateRoute><Wincome /></PrivateRoute>} />
      <Route path="*" element={<NotFoundPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/changePassword" element={<ChangePassword />}></Route>
    </Routes>
    </UserProvider>
  );
}

export default App;
