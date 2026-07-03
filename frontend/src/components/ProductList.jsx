import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import api from "../api/api";

function ProductList({ onAdd, search }) {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        api.get("/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error(error);
            });

    }, []);

    return (
        <>
            {products
    .filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )
    .map((product) => (
                <ProductCard
                    key={product.id}
                    product={product}
                    onAdd={onAdd}
                />
            ))}
        </>
    );
}

export default ProductList;