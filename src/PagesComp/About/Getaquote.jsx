import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import '../../Assets/css/About/getaquote.css'
import im1 from "../../Assets/img/about/Group 1000003851.png"
import im from "../../Assets/img/about/Layer 7 1.png"

const Getaquote = () => {
    return (

        <Container >
            <Row className=' getaquoteback'>
                <Col lg={2} className=' d-none d-lg-block'>
                    <img src={im} className=' img-fluid h-50' alt="" />
                </Col>
                <Col lg={7} className='getaquotebackone'  style={{ letterSpacing: '3px' }}>
                    <h3 className=' p-5 text-white  '>"Streamline Your Dispensing Process <span className=' fw-bolder fs-1'>Shop Now!</span>"</h3>
                </Col>
                <Col lg={3}>
                    <img src={im1} alt="" className=' getaquotebackleftimg img-fluid' />
                    <div  className='getaquotebackleft px-4'>
                        <h5 className=' text-white'>Its not just about
                            the machinery..</h5>
                        <h6>Its about the efficiency!!</h6>
                        <button className=' bg-dark text-white border-0 py-3 px-5 rounded-5' >Get A Quote</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Getaquote