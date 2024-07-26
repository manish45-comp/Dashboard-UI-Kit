import { Route, Routes } from "react-router-dom";

import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import SmartHome from "../pages/dashboard/tabs/SmartHome";
import Overview from "../pages/dashboard/tabs/Overview";
import Logistics from "../pages/dashboard/tabs/Logistics";
import Analytics from "../pages/dashboard/tabs/Analytics";
import Crypto from "../pages/dashboard/tabs/Crypto";
import Orders from "../pages/dashboard/tabs/Orders";
import Invoices from "../pages/dashboard/tabs/Invoices";
import Products from "../pages/dashboard/tabs/Products";
import Customers from "../pages/dashboard/tabs/Customers";
import Teams from "../pages/dashboard/tabs/Teams";
import Tasks from "../pages/dashboard/tabs/Tasks";
import Settings from "../pages/dashboard/tabs/Settings";
import Blank from "../pages/dashboard/tabs/Blank";

const RouterManager = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/forgot-password" element={<ForgotPassword />}></Route>
      <Route path="/reset-password" element={<ResetPassword />}></Route>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Overview />} />
        <Route path="smart-home" element={<SmartHome />} />
        <Route path="logistics" element={<Logistics />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="crypto" element={<Crypto />} />
        <Route path="orders" element={<Orders />} />
        <Route path="invoices" element={<Invoices />} />
        <Route path="products" element={<Products />} />
        <Route path="customers" element={<Customers />} />
        <Route path="teams" element={<Teams />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="settings" element={<Settings />} />
        <Route path="blank" element={<Blank />} />
      </Route>
    </Routes>
  );
};

export default RouterManager;
