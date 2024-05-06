import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../Assets/css/home/shopnow.css'
const SmallBanner = () => {
    return (
        <Container fluid className='shopnow py-sm-4 py-lg-0'>
            <Row className=' d-flex justify-content-center'>
                <Col md={9} className=' justify-content-center d-lg-flex py-lg-0 py-5  '>
                    <div className=' align-content-center text-white px-lg-5 ps-4'><h3>A D D R E S S</h3></div>
                    <div className=' align-content-center p-lg-0 p-3 '>
                        <h6 className=' text-white'>Head Office, Nashik M-8, MIDC, Ambad, Nashik - 422010, India.</h6>
                        <h6 className=' text-white'> Phone: +91-253-6613206/6613218/6613214 </h6>
                        <h6 className=' text-white'> Mail: info@positivemetering.com</h6>
                        <button className='contact-btn my-lg-0 my-3 '> CONTACT US</button>
                    </div>

                </Col>
                <Col md={3} >
                    <div className='imshopnow'>
                        <div className=' text-center  imshopdata px-3'>
                            <h1>Streamline</h1>
                            <h3>  Your Dispensing Process Shop Now</h3></div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SmallBanner