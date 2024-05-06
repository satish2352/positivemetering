import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../Assets/css/home/shopnow.css'
import im from "../../Assets/img/homeimg/POSITIVE 1.png"

const Shopnow = () => {
    return (
        <Container fluid className='shopnow py-sm-4 py-lg-0'>
            <Row>
                <Col md={9} className=' justify-content-center d-flex  '>
                    <div className=' align-content-center'>
                        <h2>Streamline Your Dispensing Process</h2>
                        <h1>   Shop Now</h1>
                        <button className='contact-btn'> CONTACT US</button>
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

export default Shopnow