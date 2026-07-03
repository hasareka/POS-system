import { useEffect, useState } from "react";
import api from "../api/api";
import SaleDetails from "../components/SaleDetails";

function Sales() {

    const [sales, setSales] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const [selectedSale, setSelectedSale] = useState(null);

    useEffect(() => {
        loadSales();
    }, []);

    const loadSales = async () => {
        try {
            const response = await api.get("/sales");
            setSales(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const viewSale = (sale) => {
        setSelectedSale(sale);
        setShowDetails(true);
    };

    return (

        <div className="container mt-4">

            <h2 className="mb-4">Sales History</h2>

            <table className="table table-bordered table-hover">

                <thead className="table-dark">

                    <tr>
                        <th>Invoice</th>
                        <th>Date</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {sales.map((sale) => (

                        <tr key={sale.id}>

                            <td>{sale.invoiceNo}</td>

                            <td>{sale.saleDate}</td>

                            <td>Rs. {sale.total}</td>

                            <td>

                                <button
                                    className="btn btn-primary btn-sm"
                                    onClick={() => viewSale(sale)}
                                >
                                    View
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

            <SaleDetails
                show={showDetails}
                handleClose={() => setShowDetails(false)}
                sale={selectedSale}
            />

        </div>

    );
}

export default Sales;