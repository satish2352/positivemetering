import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import img1 from "../../Assets/NewsAndEvent/img1.png"
const NewsAndEventCard = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xl={4}>
                        <Card className='rounded-4'>
                            <Card.Img variant="top" className='w-100' src={img1} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "1rem", fontWeight: "700", lineHeight: "1.4" }}>Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit</Card.Title>
                                <Card.Text style={{ fontSize: "0.75rem", textAlign: "justify" }}>
                                    Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.Therefore Propane Dehydrogenation like methods are very important these days.
                                </Card.Text>
                                <Button className='ms-4' variant="outline-danger" style={{ borderRadius: "30px", border: "2px solid" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className='rounded-4'>
                            <Card.Img variant="top" className='w-100' src={img1} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "1rem", fontWeight: "700", lineHeight: "1.4" }}>Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit</Card.Title>
                                <Card.Text style={{ fontSize: "0.75rem", textAlign: "justify" }}>
                                    Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.Therefore Propane Dehydrogenation like methods are very important these days.
                                </Card.Text>
                                <Button className='ms-4' variant="outline-danger" style={{ borderRadius: "30px", border: "2px solid" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className='rounded-4'>
                            <Card.Img variant="top" className='w-100' src={img1} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "1rem", fontWeight: "700", lineHeight: "1.4" }}>Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit</Card.Title>
                                <Card.Text style={{ fontSize: "0.75rem", textAlign: "justify" }}>
                                    Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.Therefore Propane Dehydrogenation like methods are very important these days.
                                </Card.Text>
                                <Button className='ms-4' variant="outline-danger" style={{ borderRadius: "30px", border: "2px solid" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card className='rounded-4'>
                            <Card.Img variant="top" className='w-100' src={img1} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: "1rem", fontWeight: "700", lineHeight: "1.4" }}>Phosphate Dosing in propane Dehydrogenation PDH Unit integrated with Polypropylene PP Unit</Card.Title>
                                <Card.Text style={{ fontSize: "0.75rem", textAlign: "justify" }}>
                                    Propylene can be produced as a by-product in the Ethylene Plants or Oil Refining processes.But the demand of Propylene is much higher as compared to the produce that is available in the above sources.Therefore Propane Dehydrogenation like methods are very important these days.
                                </Card.Text>
                                <Button className='ms-4' variant="outline-danger" style={{ borderRadius: "30px", border: "2px solid" }}>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NewsAndEventCard