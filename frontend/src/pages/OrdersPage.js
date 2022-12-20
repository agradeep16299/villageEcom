import React from "react";
import { Alert, Col, Container, Row, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import OrderSet from "../components/OredrSet"
import { useIncreaseCartProductMutation, useDecreaseCartProductMutation, useRemoveFromCartMutation } from "../services/appApi";
import "./CartPage.css";



function CartPage() {
    const user = useSelector((state) => state.user);
    const products = useSelector((state) => state.products);
    const userCartObj = user.cart;
    let cart = products.filter((product) => userCartObj[product._id] != null);
    const [increaseCart] = useIncreaseCartProductMutation();
    const [decreaseCart] = useDecreaseCartProductMutation();
    const [removeFromCart, { isLoading }] = useRemoveFromCartMutation();

    function handleDecrease(product) {
        const quantity = user.cart.count;
        if (quantity <= 0) return alert("Can't proceed");
        decreaseCart(product);
    }

    return (
        <Container style={{ minHeight: "95vh" }} className="cart-container">
            <Row>
            <Col >
                     <h2 className="pt-1 h2">Your Order</h2>
                     <br/>
                     <br/>
                     {cart.length == 0 ? (
                         <Alert variant="info">No Orders Yet. Add your orders</Alert>
                     ) : (
                        <OrderSet />
                        
                    )}
                </Col>
               
                {cart.length > 0 && (
                    <Col md={7}>
                        <>
                            <Table responsive="sm" className="cart-table">
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Subtotal</th>
                                        <th>Dealer Contact Number</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* loop through cart products */}
                                    {cart.map((item) => (
                                        <tr>
                                            <td>&nbsp;</td>
                                            <td>
                                                {!isLoading && <i  style={{ marginRight: 10, cursor: "pointer" }} onClick={() => removeFromCart({ productId: item._id, price: item.price, userId: user._id })}></i>}
                                                <img src={item.pictures[0].url} style={{ width: 100, height: 100, objectFit: "cover" }} />
                                            </td>
                                            <td>₹{item.price}</td>
                                            <td>
                                                <span className="quantity-indicator">
                                                    <i onClick={() => handleDecrease({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                    <span>{user.cart[item._id]}</span>
                                                    <i onClick={() => increaseCart({ productId: item._id, price: item.price, userId: user._id })}></i>
                                                </span>
                                            </td>
                                            <td>₹{item.price * user.cart[item._id]}</td>
                                            <td>+91 {item.dealerNo}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <div>
                                <h3 className="h4 pt-4">Total: ₹{user.cart.total}</h3>
                            </div>
                          
                        </>
                    </Col>
                    
                )}
            </Row>
        </Container>
    );
}

export default CartPage;