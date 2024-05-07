import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Heading from '../../Components/Heading'
import img1 from "../../Assets/Blog/Frame 14.png"
const BlogCard = () => {
    return (
        <>
            <section>
                <Heading heading={"Blog"} />
                <Container fluid>
                    <Row>
                        <Col xl={6} className=''>
                            <Card className='border-0'>
                                <Row className='text-white'>
                                    <Col xl={6} className='pe-0 ps-0'>
                                        <Card.Img variant="top" src={img1} />
                                    </Col>
                                    <Col xl={6} className='ps-0' style={{
                                            background: "#ABABAB",
                                        }}>
                                        <Card.Body className='pt-4' style={{
                                            background: "#ABABAB",
                                        }}>
                                            <Card.Title style={{
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                letterSpacing: "1.2px"
                                            }}> Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit</Card.Title>
                                            <Card.Text style={{ fontSize: "0.72rem" }}>
                                                Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.
                                            </Card.Text>
                                            <Button variant="transparant" className='text-white py-2 mt-xl-3' style={{ border: "3px solid white", borderRadius: "30px" }}>Read More</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col xl={6} className=''>
                            <Card className='border-0'>
                                <Row className='text-white'>
                                    <Col xl={6} className='pe-0 ps-0'>
                                        <Card.Img variant="top" src={img1} />
                                    </Col>
                                    <Col xl={6} className='ps-0' style={{
                                            background: "#ABABAB",
                                        }}>
                                        <Card.Body className='pt-4' style={{
                                            background: "#ABABAB",
                                        }}>
                                            <Card.Title style={{
                                                fontWeight: "600",
                                                fontSize: "1rem",
                                                letterSpacing: "1.2px"
                                            }}> Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit</Card.Title>
                                            <Card.Text style={{ fontSize: "0.72rem" }}>
                                                Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.
                                            </Card.Text>
                                            <Button variant="transparant" className='text-white py-2 mt-xl-3' style={{ border: "3px solid white", borderRadius: "30px" }}>Read More</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row >
                </Container >
            </section >
        </>
    )
}

export default BlogCard