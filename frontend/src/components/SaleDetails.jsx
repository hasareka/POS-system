import { Modal, Button, Table } from "react-bootstrap";

function SaleDetails({ show, handleClose, sale }) {

    if (!sale) return null;

    return (
        <Modal show={show} onHide={handleClose} size="lg">

            <Modal.Header closeButton>
                <Modal.Title>Sale Details</Modal.Title>
            </Modal.Header>

            <Modal.Body>

                <h5>Invoice: {sale.invoiceNo}</h5>

                <p>
                    <strong>Date:</strong> {sale.saleDate}
                </p>

                <Table bordered>

                    <thead>

                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                        </tr>

                    </thead>

                    <tbody>

                        {sale.items.map(item => (

                            <tr key={item.id}>
                                <td>{item.productName}</td>
                                <td>Rs. {item.price}</td>
                                <td>{item.quantity}</td>
                                <td>Rs. {item.subtotal}</td>
                            </tr>

                        ))}

                    </tbody>

                </Table>

                <h5>Total : Rs. {sale.total}</h5>
                <h6>Cash : Rs. {sale.cashReceived}</h6>
                <h6>Balance : Rs. {sale.balance}</h6>

            </Modal.Body>

            <Modal.Footer>

                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>

            </Modal.Footer>

        </Modal>
    );
}

export default SaleDetails;