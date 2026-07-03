import { useState } from "react";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Receipt from "../components/Receipt";

function POS() {

    const [cart, setCart] = useState([]);
    const [cashReceived, setCashReceived] = useState("");
    const [showReceipt, setShowReceipt] = useState(false);
    const [search, setSearch] = useState("");

    const addToCart = (product) => {

        const existingItem = cart.find(
            item => item.id === product.id
        );

        if (existingItem) {

            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? {
                        ...item,
                        quantity: item.quantity + 1
                    }
                    : item
            );

            setCart(updatedCart);

        } else {

            setCart([
                ...cart,
                {
                    ...product,
                    quantity: 1
                }
            ]);

        }

    };

    const increaseQuantity = (id) => {

        const updatedCart = cart.map(item =>
            item.id === id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        );

        setCart(updatedCart);

    };

    const decreaseQuantity = (id) => {

        const updatedCart = cart
            .map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
            .filter(item => item.quantity > 0);

        setCart(updatedCart);

    };

    const removeItem = (id) => {

        setCart(cart.filter(item => item.id !== id));

    };

    const checkout = () => {

        const total = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );

        if (cart.length === 0) {
            alert("No items in the bill.");
            return;
        }

        if (Number(cashReceived) < total) {
            alert("Insufficient cash received.");
            return;
        }

        setShowReceipt(true);

    };

    const closeReceipt = () => {
        setShowReceipt(false);
        setCart([]);
        setCashReceived("");
    };

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const balance = Number(cashReceived || 0) - total;

    return (
        <>
            <div className="container-fluid mt-3 px-4">

                <div className="row">

                    <div className="col-lg-7">

                        <div className="border rounded p-3">

                            <h3 className="mb-3">Products</h3>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="🔍 Search Product..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <ProductList
                                onAdd={addToCart}
                                search={search}
                            />

                        </div>

                    </div>

                    <div className="col-lg-5">

                        <div className="border rounded p-3">

                            <h3 className="mb-3">Current Bill</h3>

                            <Cart
                                cart={cart}
                                increaseQuantity={increaseQuantity}
                                decreaseQuantity={decreaseQuantity}
                                removeItem={removeItem}
                                cashReceived={cashReceived}
                                setCashReceived={setCashReceived}
                                checkout={checkout}
                            />

                        </div>

                    </div>

                </div>

            </div>

            <Receipt
                show={showReceipt}
                handleClose={closeReceipt}
                cart={cart}
                total={total}
                cashReceived={cashReceived}
                balance={balance}
            />
        </>
    );
}

export default POS;