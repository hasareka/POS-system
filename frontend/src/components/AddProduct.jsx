import { useState } from "react";
import api from "../api/api";

function AddProduct({ onProductAdded }) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            await api.post("/products", {
                name,
                price: parseFloat(price)
            });

            alert("Product Added Successfully!");

            setName("");
            setPrice("");

            onProductAdded();

        } catch (error) {
            console.error(error);
            alert("Failed to add product.");
        }
    };

    return (
        <div className="card p-3 mb-3">

            <h4 className="mb-3">Add Product</h4>

            <form onSubmit={handleSubmit}>

                <div className="mb-3">
                    <label className="form-label">Product Name</label>

                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label">Price</label>

                    <input
                        type="number"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="btn btn-success"
                >
                    Save Product
                </button>

            </form>

        </div>
    );
}

export default AddProduct;