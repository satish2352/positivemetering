import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import im1 from "../../Assets/img/homeimg/8538f65b57b894ab67325c5349657e23.png"
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import Heading from '../../Components/Heading'
const Testomonial = () => {
  var settings = {
    infinite: false,
    speed: 500,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    <Container fluid className='testomonialback py-5 text-center'>
      <Heading heading={"TESTOMONIALS"} />
        <Slider {...settings}>

          <Col className=' text-center   d-grid justify-content-center'>
            <div className='profileposition '><img src={im1} alt="" className='shadow-lg testomonialprofile img-fluid ' /></div>
            <div className=' shadow-lg testback   '>
              <h1>Good service</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
              <div className=' d-flex justify-content-center'>
                <FaStar className=' star' />
                <FaStar className=' star' />
                <FaStar className=' star' />
                <FaStar className=' star' />
                <FaStar className=' star1' />
              </div>
            </div>
          </Col>
          <Col className=' text-center   d-grid justify-content-center'>
            <div className='profileposition '><img src={im1} alt="" className='shadow-lg testomonialprofile img-fluid ' /></div>
            <div className=' shadow-lg testback   '>
              <h1>Good service</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
              <div className=' d-flex justify-content-center'>
                <FaStar className=' star' />
                <FaStar className=' star' />
                <FaStar className=' star' />
                <FaStar className=' star1' />   <FaStar className=' star1' />

              </div>
            </div>
          </Col>
          <Col className=' text-center   d-grid justify-content-center'>
            <div className='profileposition '><img src={im1} alt="" className='shadow-lg testomonialprofile img-fluid ' /></div>
            <div className=' shadow-lg testback   '>
              <h1>Good service</h1>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer</p>
              <div className=' d-flex justify-content-center'>
                <FaStar className=' star' />
                <FaStar className=' star' />
                <FaStar className=' star' />
                <FaStar className=' star' />
                <FaStar className=' star1' />
              </div>
            </div>
          </Col>
        </Slider>
     

    </Container>
  )
}

export default Testomonial