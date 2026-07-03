import { useEffect, useState } from "react";
import api from "../api/api";

function Products() {

    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [editingId, setEditingId] = useState(null);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        try {
            const response = await api.get("/products");
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const clearForm = () => {
        setName("");
        setPrice("");
        setEditingId(null);
    };

    const saveProduct = async () => {

        if (!name || !price) {
            alert("Please fill all fields.");
            return;
        }

        try {

            if (editingId === null) {

                await api.post("/products", {
                    name,
                    price
                });

                alert("Product Added Successfully!");

            } else {

                await api.put(`/products/${editingId}`, {
                    name,
                    price
                });

                alert("Product Updated Successfully!");

            }

            clearForm();
            loadProducts();

        } catch (error) {
            console.error(error);
            alert("Operation Failed.");
        }

    };

    const editProduct = (product) => {
        setEditingId(product.id);
        setName(product.name);
        setPrice(product.price);
    };

    const deleteProduct = async (id) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this product?"
        );

        if (!confirmDelete) return;

        try {

            await api.delete(`/products/${id}`);

            loadProducts();

        } catch (error) {

            console.error(error);
            alert("Delete Failed.");

        }

    };

    return (
        <div className="container mt-4">

            <h2 className="mb-4 text-center">Products</h2>

            <div className="card p-4 mb-4 shadow-sm">

                <h5 className="mb-3">
                    {editingId ? "Edit Product" : "Add Product"}
                </h5>

                <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Product Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="number"
                    className="form-control mb-3"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <div>

                    <button
                        className="btn btn-primary me-2"
                        onClick={saveProduct}
                    >
                        {editingId ? "Update Product" : "Add Product"}
                    </button>

                    {editingId && (

                        <button
                            className="btn btn-secondary"
                            onClick={clearForm}
                        >
                            Cancel
                        </button>

                    )}

                </div>

            </div>

            <table className="table table-bordered table-hover shadow-sm">

                <thead className="table-dark">

                    <tr>

                        <th>ID</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th width="220">Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {products.map(product => (

                        <tr key={product.id}>

                            <td>{product.id}</td>

                            <td>{product.name}</td>

                            <td>Rs. {product.price}</td>

                            <td>

                                <button
                                    className="btn btn-warning btn-sm me-2"
                                    onClick={() => editProduct(product)}
                                >
                                    Edit
                                </button>

                                <button
                                    className="btn btn-danger btn-sm"
                                    onClick={() => deleteProduct(product.id)}
                                >
                                    Delete
                                </button>

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    );
}

export default Products;