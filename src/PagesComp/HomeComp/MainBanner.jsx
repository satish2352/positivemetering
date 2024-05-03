import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import Gropimgnomeleft from '../../assets/img/homeimg/Group 1000003820.png'
import '../../assets/css/home/mainbanner.css'
const MainBanner = () => {
    return (

        <Container fluid className='mainbanner'>
            <Row>
                <Col lg={4} className='mainbannerleftsection'>
                    <img src={Gropimgnomeleft} alt="" className='img-fluid  ' />
                </Col>
                <Col lg={8}>
                    <Row className='welcomesection'>
                        <Col lg={2}></Col>
                        <Col lg={10} className='align-content-center   '>
                            <div className=' justify-content-center'>
                                <h1 className='shiftimng'>WELCOME</h1>
                                <h2 className='shiftimng'>TO POSITIVE METERING PUMPS</h2>
                                <div className='bgred'>
                                    <p className='shiftimngp'>Exploring new food with different transition form all Asian country especially from Cambodia that you can try at this place and get a good price from us as well we will make a good impact to our customers </p>
                                </div>

                            </div>
                        </Col>


                    </Row>
                    <Row className='welcomesection2'>

                    </Row>
                </Col>
            </Row>
        </Container>

    )
}

export default MainBanner