import { Modal, Button } from "react-bootstrap";

function Receipt({
    show,
    handleClose,
    cart,
    total,
    cashReceived,
    balance
}) {

    const invoiceNo = "INV-" + Date.now();

    const date = new Date().toLocaleString();

    return (
        <Modal show={show} onHide={handleClose} centered>

            <Modal.Header closeButton>
                <Modal.Title>Receipt</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <div className="text-center">

                    <h3>QuickPOS</h3>

                    <p>
                        Invoice : {invoiceNo}
                        <br />
                        {date}
                    </p>

                </div>

                <hr />

                {
                    cart.map(item => (

                        <div
                            key={item.id}
                            className="d-flex justify-content-between"
                        >

                            <span>
                                {item.name} x {item.quantity}
                            </span>

                            <span>
                                Rs. {(item.price * item.quantity).toFixed(2)}
                            </span>

                        </div>

                    ))
                }

                <hr />

                <div className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>Rs. {total.toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between">
                    <span>Cash</span>
                    <span>Rs. {Number(cashReceived).toFixed(2)}</span>
                </div>

                <div className="d-flex justify-content-between">
                    <span>Balance</span>
                    <span>Rs. {balance.toFixed(2)}</span>
                </div>

                <hr />

                <p className="text-center">
                    Thank You!
                </p>

            </Modal.Body>

            <Modal.Footer>

                <Button
                    variant="secondary"
                    onClick={handleClose}
                >
                    Close
                </Button>

                <Button
                    variant="success"
                    onClick={() => window.print()}
                >
                    Print
                </Button>

            </Modal.Footer>

        </Modal>
    );
}

export default Receipt;