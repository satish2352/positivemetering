import React from 'react'
import '../../Assets/css/home/mainbanner.css'

import Slider from "react-slick";
import im from "../../Assets/img/homeimg/Rectangle 114.png"
import im1 from "../../Assets/img/homeimg/Rectangle 116.png"
import im2 from "../../Assets/img/homeimg/image 20.png"
import { Container,Row } from 'react-bootstrap';



function OurProducts() {

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
    <Container fluid>
     
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
  );
}




export default OurProducts