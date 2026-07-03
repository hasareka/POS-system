function Cart({
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    cashReceived,
    setCashReceived,
    checkout
}) {

    const total = cart.reduce((sum, item) => {
        return sum + item.price * item.quantity;
    }, 0);
    const balance =
    Number(cashReceived || 0) - total;

    return (

        <div>

            {
                cart.length === 0 ?

                    (
                        <p className="text-center text-muted">
                            No Items Added
                        </p>
                    )

                    :

                    (
                        <>

                            <table className="table table-sm align-middle">

                                <thead>

                                    <tr>
                                        <th>Item</th>
                                        <th className="text-center">Qty</th>
                                        <th className="text-end">Total</th>
                                        <th></th>
                                    </tr>

                                </thead>

                                <tbody>

                                    {

                                        cart.map(item => (

                                            <tr key={item.id}>

                                                <td className="text-nowrap">

                                                    <strong>{item.name}</strong>

                                                    <br />

                                                    <small className="text-muted">
                                                        Rs. {item.price}
                                                    </small>

                                                </td>

                                                <td className="text-center">

<div className="d-flex justify-content-center align-items-center gap-2">
        <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => decreaseQuantity(item.id)}
        >
            −
        </button>

        <span
    className="fw-bold text-center"
    style={{ width: "20px" }}
>
            {item.quantity}
        </span>

        <button
            className="btn btn-sm btn-outline-primary"
            onClick={() => increaseQuantity(item.id)}
        >
            +
        </button>

    </div>

</td>

                                                <td className="text-end text-nowrap fw-semibold">

    Rs. {(item.price * item.quantity).toFixed(2)}

</td>

                                                <td>

                                                    <button
                                                        className="btn btn-sm btn-outline-danger"
                                                        onClick={() => removeItem(item.id)}
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>

                                                </td>

                                            </tr>

                                        ))

                                    }

                                </tbody>

                            </table>

                            <hr />

                            <div className="d-flex justify-content-between fs-4 fw-bold mb-4">

    <span>Total</span>

    <span>
        Rs. {total.toFixed(2)}
    </span>

</div>

<div className="mb-3">

    <label className="form-label fw-semibold">
    Cash Received
</label>

    <input
        type="number"
        className="form-control"
        placeholder="Enter cash amount"
        value={cashReceived}
        onChange={(e) =>
            setCashReceived(e.target.value)
        }
    />

</div>

<div className="d-flex justify-content-between fs-5 fw-bold">

    <span>Balance</span>

    <span
        className={
            balance < 0
                ? "text-danger"
                : "text-success"
        }
    >
        Rs. {balance.toFixed(2)}
    </span>

</div>

<button
    className="btn btn-success btn-lg w-100 mt-4"
    onClick={checkout}
>
    Checkout
</button>

                        </>

                    )

            }

        </div>

    );

}

export default Cart;