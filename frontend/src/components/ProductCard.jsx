function ProductCard({ product, onAdd }) {
    return (
        <div className="card mb-3 shadow-sm">
            <div className="card-body d-flex justify-content-between align-items-center">

                <div>
                    <h5>{product.name}</h5>
                    <p className="text-success mb-0">
                        Rs. {product.price}
                    </p>
                </div>

                <button
                    className="btn btn-primary px-4"
                    onClick={() => onAdd(product)}
                >
                    Add
                </button>

            </div>
        </div>
    );
}

export default ProductCard;