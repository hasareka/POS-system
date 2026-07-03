import { Routes, Route, Link } from "react-router-dom";

import POS from "./pages/POS";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">

          <Link className="navbar-brand" to="/dashboard">
            QuickPOS
          </Link>

          <div className="navbar-nav">
            <Link className="nav-link" to="/dashboard">
                Dashboard
            </Link>
            <Link className="nav-link" to="/">
              POS
            </Link>

            <Link className="nav-link" to="/products">
              Products
            </Link>

            <Link className="nav-link" to="/sales">
              Sales
            </Link>

          </div>

        </div>
      </nav>

      <Routes>
        <Route
            path="/dashboard"
            element={<Dashboard />}
        />

        <Route
          path="/"
          element={<POS />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/sales"
          element={<Sales />}
        />

      </Routes>
    </>
  );
}

export default App;