import { Routes, Route, Link } from "react-router-dom";

import POS from "./pages/POS";
import Products from "./pages/Products";

function App() {
  return (
    <>

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

        <div className="container">

          <Link className="navbar-brand" to="/">
            QuickPOS
          </Link>

          <div className="navbar-nav">

            <Link className="nav-link" to="/">
              POS
            </Link>

            <Link className="nav-link" to="/products">
              Products
            </Link>

          </div>

        </div>

      </nav>

      <Routes>

        <Route path="/" element={<POS />} />

        <Route path="/products" element={<Products />} />

      </Routes>

    </>
  );
}

export default App;