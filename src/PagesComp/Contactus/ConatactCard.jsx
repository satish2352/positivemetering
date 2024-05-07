import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import '../../Assets/css/contatct/cards.css'
import im1 from "../../Assets/img/conatact/image 16.png"

const ConatactCard = () => {
    return (

        <Container className='caontatctcardback py-5'>
            <Row>
                <Col lg={4} md={6}>
                    <div>
                        <img src={im1} alt="" className=' img-fluid' />
                    </div>
                    <div className='caontatctcardsubsection p-3'>
                        <h6>Spares</h6>
                        <p> Contact Person : Ms. Kalpana Jadhav
                            Phone: +91 9552590843
                            Mail: support@positivemetering.com</p>
                    </div>
                </Col>
                <Col lg={4}  md={6}>
                    <div>
                        <img src={im1} alt="" className=' img-fluid' />
                    </div>
                    <div className='caontatctcardsubsection p-3 '>
                        <h6>Spares</h6>
                        <p> Contact Person : Ms. Kalpana Jadhav
                            Phone: +91 9552590843
                            Mail: support@positivemetering.com</p>
                    </div>
                </Col>
                <Col lg={4}  md={6}>
                    <div>
                        <img src={im1} alt="" className=' img-fluid' />
                    </div>
                    <div className='caontatctcardsubsection p-3'>
                        <h6>Spares</h6>
                        <p> Contact Person : Ms. Kalpana Jadhav
                            Phone: +91 9552590843
                            Mail: support@positivemetering.com</p>
                    </div>
                </Col>
                <Col lg={4}  md={6}>
                    <div>
                        <img src={im1} alt="" className=' img-fluid' />
                    </div>
                    <div className='caontatctcardsubsection p-3'>
                        <h6>Spares</h6>
                        <p> Contact Person : Ms. Kalpana Jadhav
                            Phone: +91 9552590843
                            Mail: support@positivemetering.com</p>
                    </div>
                </Col>
                <Col lg={4}  md={6}>
                    <div>
                        <img src={im1} alt="" className=' img-fluid' />
                    </div>
                    <div className='caontatctcardsubsection p-3'>
                        <h6>Spares</h6>
                        <p> Contact Person : Ms. Kalpana Jadhav
                            Phone: +91 9552590843
                            Mail: support@positivemetering.com</p>
                    </div>
                </Col>
                <Col lg={4}  md={6}>
                    <div>
                        <img src={im1} alt="" className=' img-fluid' />
                    </div>
                    <div className='caontatctcardsubsection p-3'>
                        <h6>Spares</h6>
                        <p> Contact Person : Ms. Kalpana Jadhav
                            Phone: +91 9552590843
                            Mail: support@positivemetering.com</p>
                    </div>
                </Col>
                
            </Row>
        </Container>
    )
}

export default ConatactCard