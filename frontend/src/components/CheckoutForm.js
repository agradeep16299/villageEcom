import React, { useState } from 'react'
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateOrderMutation } from "../services/appApi";
import "./CheckoutForm.css"

const CheckoutForm = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [createOrder, { isLoading, isError, isSuccess }] = useCreateOrderMutation();
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("")
  const [order, setOrder] = useState(false);

  async function handlePay(e) {
    e.preventDefault();
    if (user.cart.count <= 0) return;
    setOrder(true);
    createOrder({ userId: user._id, cart: user.cart, address, phone }).then((res) => {
      if (!isLoading && !isError) {
        setAlertMessage(`Order Successful`);
        setTimeout(() => {
          navigate("/orders");
        }, 3000);
      }
    });
  }

  return (
    <>
      <div className="container">
        <p className="checkout-text">To Buy This Product click on order button.Cash On delevary Available </p>
        <Col className="checkout-container">
          <Form onSubmit={handlePay}>
            <Row>
              {alertMessage && <Alert>{alertMessage}</Alert>}
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control type="text" placeholder="First Name" value={user.name} disabled />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group className="mb-2">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="text" placeholder="Email" value={user.email} disabled />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={7}>
                <Form.Group className="mb-3">
                  <Form.Label>Address:</Form.Label>
                  <Form.Control type="text" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} required />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-3">
                  <Form.Label>Phone:</Form.Label>
                  <Form.Control type="number" placeholder="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </Form.Group>
              </Col>
            </Row>
            <Button className="mt-3" type="submit" disabled={user.cart.count <= 0 || order || isSuccess}>
              order now
            </Button>
          </Form>
        </Col>
      </div>
    </>
  )
}

export default CheckoutForm