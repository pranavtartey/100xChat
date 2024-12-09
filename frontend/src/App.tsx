import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AuthLayout from "./pages/layouts/AuthLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RootLayout from "./pages/layouts/RootLayout";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
