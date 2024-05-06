import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Gropimgnomeleft from '../../Assets/img/homeimg/Group 1000003820.png'
import '../../Assets/css/home/mainbanner.css'
import im from "../../Assets/img/homeimg/image-removebg-preview (88) 1.png"
const MainBanner = () => {
    return (

        <Container fluid className='mainbanner'>
            <Row>
                <Col lg={4} className='mainbannerleftsection d-none d-lg-block'>
                    <img src={Gropimgnomeleft} alt="" className='img-fluid  ' />
                </Col>
                <Col lg={8}>
                    <Row className='welcomesection'>
                        <Col lg={2} className=' d-none'></Col>
                        <Col lg={10} md={12} className='align-content-center   '>
                            <div className=' justify-content-center'>
                                <h1 className='shiftimng'>WELCOME</h1>
                                <h2 className='shiftimng'>TO POSITIVE METERING PUMPS</h2>
                                <div className='bgred'>
                                    <p className='shiftimngp'>Exploring new food with different transition form all Asian country especially from Cambodia that you can try at this place and get a good price from us as well we will make a good impact to our customers </p>
                                </div>

                            </div>
                        </Col>


                    </Row>
                    <Row className='welcomesection2  '>
                        <Col lg={3} className=' d-none d-lg-block'></Col>
                        <Col lg={9} md={12} className='welcomesectionleft shadow-lg' >
                            <Row>
                                <Col sm={6}>
                                    <h2>ABOUT US</h2>
                                    <p>
                                        any Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment. After working with KOEL for a short while his love for Diesel Engines and precisely the slider-crank mechanism attracted him towards Chemical Dosing Pumps, the drive end of which                                    </p>
                                </Col >
                                <Col sm={6}><img src={im} alt="" /></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default MainBanner