import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

// Guest Layout & Components
import GuestLayout from "./layouts/Guest";
import TopProduk from "./components/TopProduk";
import Testimoni from "./components/Testimoni";
import CekProduk from "./pages/CekProduk";
import About from "./components/About";

import Hero from "./components/HeroSection";


// Lazy-loaded Admin Layout & Pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Users = React.lazy(() => import("./pages/Users"));
const NotFound = React.lazy(() => import("./pages/auth/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const MainLayout = React.lazy(() => import("./layouts/MainLayout"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));
const Loading = React.lazy(() => import("./components/Loading"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Guest Layout */}
        <Route path="/guest" element={<GuestLayout />}>
          <Route index element={
            <>
              <Hero />
              <About />
              <TopProduk />
              <Testimoni />
            </>
          } />
          <Route path="about" element={<About />} />
          <Route path="produk" element={<TopProduk />} />
          <Route path="testimoni" element={<Testimoni />} />
          <Route path="cekproduk" element={<CekProduk />} />
        </Route>

        {/* Main Admin Layout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
        </Route>

        {/* Auth Pages */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Error Pages */}
        <Route path="/error400" element={<Error400 />} />
        <Route path="/error401" element={<Error401 />} />
        <Route path="/error403" element={<Error403 />} />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
