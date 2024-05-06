import React from 'react'
import Heading from '../../Components/Heading'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import formImg from "../../Assets/Images/careerform.png"
const UploadCV = () => {
    return (
        <>
            <Heading heading={"career opportunity"} />
            <Container>
                <Card className='p-5'>

                    <h2 className='pt-3 pb-5 mx-auto careerFormHeading'>UPLOAD YOUR CV</h2>
                    <Form>
                        <Row className=''>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="enter your name" />
                                </Form.Group>
                            </Col>
                        
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email Id</Form.Label>
                                    <Form.Control type="email" placeholder="enter your email" />
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="enter your phone" />
                                </Form.Group>
                            </Col>
                            <Col xl={6}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Subject</Form.Label>
                                    <Form.Control type="text" placeholder="enter your subject" />
                                </Form.Group>
                            </Col>
                            <Col xl={12}>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control placeholder='enter your message' as="textarea" rows={3} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <div className='text-center'>
                            <Button variant="danger" type='button' className='p-3 ' style={{ borderRadius: "30px", letterSpacing: "2px" }}>Send Message</Button>
                        </div>
                    </Form>

                </Card>
                <img className='formImg' src={formImg} alt="" />
            </Container>
        </>
    )
}

export default UploadCV