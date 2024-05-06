import React, { useState } from 'react'
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import productImg from "../Assets/Images/image 5.png"
import im2 from "../Assets/img/homeimg/image 20.png"
import Slider from 'react-slick'
const ProductComp = () => {
    const [data, setData] = useState([])

    var settings = {
        infinite: false,
        speed: 500,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "20px",
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
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
            </section>
            <section>
                <Container>

                    <Slider {...settings}>
                        <div className=' ourprdcard'>
                            <h3><img src={im2} className=' img-fluid  ' alt="" /></h3>
                        </div>
                        <div className=' ourprdcard'>
                            <h3><img src={im2} className=' img-fluid  ' alt="" /></h3>
                        </div>
                        <div className=' ourprdcard'>
                            <h3><img src={im2} className=' img-fluid  ' alt="" /></h3>
                        </div>
                        <div className=' ourprdcard'>
                            <h3><img src={im2} className=' img-fluid  ' alt="" /></h3>
                        </div>
                        <div className=' ourprdcard'>
                            <h3><img src={im2} className=' img-fluid  ' alt="" /></h3>
                        </div>
                        <div className=' ourprdcard'>
                            <h3><img src={im2} className=' img-fluid  ' alt="" /></h3>
                        </div>
                    </Slider>
                    <Row className=' text-center '>
                        <h1 className='oueprd'>OUR PRODUCTS</h1>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default ProductComp