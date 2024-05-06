import React, { useState } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import productImg from "../Assets/Images/image 5.png"
const ProductComp = () => {
    const [data, setData] = useState([])
    return (
        <>
            <section className='mt-5'>
                <Container fluid>
                    <Row>
                        <Col className='p-0' md={6} xl={6} xxl={6}>
                            <Carousel >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${productImg}`}
                                        alt="First slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h5>First slide label</h5>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${productImg}`}
                                        alt="Second slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h5>Second slide label</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption> */}
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={`${productImg}`}
                                        alt="Third slide"
                                    />
                                    {/* <Carousel.Caption>
                                    <h5>Third slide label</h5>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption> */}
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col className='p-0 px-5 text-white' style={{ background: "#393939" }} md={6} xl={6} xxl={6}>
                            <div className='p-5'>
                                <Rating className='ms-3 mb-2' size={20} style={{ fontSize: "10px" }} initialValue={3} />
                                <h2 className='ms-3 my-2' style={{ letterSpacing: "2px" }}>PLUNGER TYPE <br /> DOSING PUMPS</h2>
                                <ul>
                                    <li>Performance conforms to API 675.</li>
                                    <li>Performance conforms to API 675.</li>
                                    <li>Performance conforms to API 675.</li>
                                    {/* {data?.map((item, id) => {
                                        return (
                                            <li>Performance conforms to API 675.</li>
                                        )
                                    })} */}
                                </ul>
                                <Button className='ms-3 text-white' style={{ borderRadius: "20px", border: "3px solid #FA3C3C", }} variant='outline-danger'>Read More</Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
                {/* <Container>
                    <Row></Row>
                </Container> */}
            </section>
        </>
    )
}

export default ProductComp