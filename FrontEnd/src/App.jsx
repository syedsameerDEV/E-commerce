import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/Layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import AdminLayout from "./components/admin-view/AdminLayout";
import AdminDashboard from "./pages/admin-view/AdminDashboard";
import AdminProducts from "./pages/admin-view/AdminProducts";
import AdminOrders from "./pages/admin-view/AdminOrders";
import AdminFeatures from "./pages/admin-view/AdminFeatures";
import ShopLayout from "./components/shopping-view/ShopLayout";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/shopping-view/Home";
import List from "./pages/shopping-view/List";
import CheckOut from "./pages/shopping-view/CheckOut";
import Account from "./pages/shopping-view/Account";
import CheckAuth from "./components/common/CheckAuth";
import UnAuthpage from "./pages/unauth-page/UnAuthpage";

function App() {
  const isAuthenticated = false;
  const user = null 
  return (
    <div className="flex flex-col overflow-hidden bg-white">
      <Routes>
        {/* authentication related route */}
        <Route
          path="/auth"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AuthLayout />
            </CheckAuth>
          }
        >
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        {/* admin related routes */}
        <Route
          path="/admin"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <AdminLayout />
            </CheckAuth>
          }
        >
          <Route path="admin-dashboard" element={<AdminDashboard />}></Route>
          <Route path="admin-products" element={<AdminProducts />}></Route>
          <Route path="admin-orders" element={<AdminOrders />}></Route>
          <Route path="admin-features" element={<AdminFeatures />}></Route>
        </Route>
        {/* Shopping related routes */}
        <Route
          path="/shopping"
          element={
            <CheckAuth isAuthenticated={isAuthenticated} user={user}>
              <ShopLayout />
            </CheckAuth>
          }
        >
          <Route path="home" element={<Home />}></Route>
          <Route path="list" element={<List />}></Route>
          <Route path="checkout" element={<CheckOut />}></Route>
          <Route path="account" element={<Account />}></Route>
        </Route>
        {/* not found pages */}
        <Route path="/unauth-page" element={<UnAuthpage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
