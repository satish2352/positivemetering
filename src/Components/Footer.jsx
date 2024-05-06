
import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import logo from "../Assets/Footer/Logo.png"
const Footer = () => {
    return (
        <div className="container-fluid m-0 p-0 mt-5">
            <div className='mb-5'>
                <Container>
                    <Row className="justify-content-center">
                        <Col md={9}>
                            <div style={{ marginBottom: '-140px' }}>
                                <Card className='p-5 border-0 text-center' style={{ background: "#E84C52", position: 'relative', zIndex: 1, borderRadius: "30px" }}>
                                    <h1 className='text-white'>Subscribe  to our News letter</h1>
                                    <Form className="d-flex align-items-center w-75 mx-auto">
                                        <Form.Control
                                            type="search"
                                            placeholder="&#x1F4E7; Enter your email"
                                            aria-label="Search"
                                            style={{ padding: "12px" }}
                                        />
                                        <Button
                                            className='my-2 '
                                            style={{
                                                position: "absolute",
                                                right: "20%",
                                                // top:"1%",

                                            }} variant="dark">Subscribe</Button>
                                    </Form>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <footer className="text-center text-white pt-5" style={{ backgroundColor: '#1A1A1A' }}>
                <Container>
                    <section className="">
                        <div className="container text-center text-md-start pt-5">
                            <div className="row justify-content-center pt-5 ms-xl-5">
                                <div className="col-md-3 col-lg-2 col-xl-3 mx-2 mb-4">
                                    <img src={logo} className='w-75' alt="" />
                                    {/* <h6 className="text-uppercase fw-bold">Company name</h6> */}
                                    {/* <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} /> */}
                                    <p style={{ textAlign: "justify" }}>
                                        Dosing Pumps are extensively utilized in a range of industries to maintain precise chemical dosing and control. Dosing Pumps economy in India has played a essential role in various sectors.
                                    </p>
                                </div>
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-2 mb-4 mt-xl-5">
                                    <h6 className="text-uppercase fw-bold mt-xl-3 ">Company</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p>
                                        <a href="/about" className="text-white">About Us</a>
                                    </p>
                                    <p>
                                        <a href="/product" className="text-white">Product</a>
                                    </p>
                                    <p>
                                        <a href="/service" className="text-white">Service</a>
                                    </p>
                                    <p>
                                        <a href="/contact" className="text-white">Contact Us</a>
                                    </p>
                                    <p>
                                        <a href="/career" className="text-white">Career</a>
                                    </p>
                                </div>
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-1 mb-4 mt-xl-5">
                                    <h6 className="text-uppercase fw-bold mt-xl-3">Product</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p>
                                        <a href="#!" className="text-white">Product 1</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Product 2</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Product 3</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Product 4</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-white">Product 5</a>
                                    </p>
                                </div>
                                <div className="col-md-4 col-lg-2 col-xl-3 mx-1 mb-md-0 mb-4 mt-xl-5">
                                    <h6 className="text-uppercase fw-bold mt-xl-3">Contact</h6>
                                    <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px', backgroundColor: '#7c4dff', height: '2px' }} />
                                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                </div>
                            </div>
                        </div>
                    </section>

                </Container>
            </footer>
            <hr className='m-0 p-0 text-white' />
            <section className="d-flex justify-content-between pb-5" style={{ backgroundColor: '#1A1A1A' }}>
                <div className="mx-auto mt-xl-4">
                    <a className="text-white mb-5 text-decoration-none" href="https://web.sumagoinfotech.com/">© 2024 Copyright :&nbsp; Made with Passion by Sumago Infotech</a>
                </div>
                <div className='mt-xl-4'>
                    <a style={{
                        padding: "8px 13px 5px 13px",
                        background: "white",
                        borderRadius: "50%"
                    }} href="" className="me-3">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a style={{
                        padding: "8px 11px 6px 11px",
                        background: "white",
                        borderRadius: "50%"
                    }} href="" className="me-3">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a style={{
                        padding: "8px 11px 6px 11px",
                        background: "white",
                        borderRadius: "50%"
                    }} href="" className="me-3">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <a style={{
                        padding: "8px 11px 6px 11px",
                        background: "white",
                        borderRadius: "50%"
                    }} href="" className="me-3">
                        <i className="fab fa-whatsapp"></i>
                    </a>

                </div>
            </section >
        </div >
    );
}

export default Footer;
