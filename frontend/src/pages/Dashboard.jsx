import { useEffect, useState } from "react";
import api from "../api/api";

function Dashboard() {

    const [productCount, setProductCount] = useState(0);
    const [salesCount, setSalesCount] = useState(0);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        loadDashboard();
    }, []);

    const loadDashboard = async () => {

        try {

            const productsResponse = await api.get("/products");
            const salesResponse = await api.get("/sales");

            setProductCount(productsResponse.data.length);
            setSalesCount(salesResponse.data.length);

            const totalRevenue = salesResponse.data.reduce(
                (sum, sale) => sum + sale.total,
                0
            );

            setRevenue(totalRevenue);

        } catch (error) {
            console.error(error);
        }

    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">Dashboard</h2>

            <div className="row">

                <div className="col-md-4">

                    <div className="card bg-primary text-white mb-3">

                        <div className="card-body">

                            <h5>Total Products</h5>

                            <h2>{productCount}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card bg-success text-white mb-3">

                        <div className="card-body">

                            <h5>Total Sales</h5>

                            <h2>{salesCount}</h2>

                        </div>

                    </div>

                </div>

                <div className="col-md-4">

                    <div className="card bg-warning text-dark mb-3">

                        <div className="card-body">

                            <h5>Total Revenue</h5>

                            <h2>Rs. {revenue}</h2>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );
}

export default Dashboard;