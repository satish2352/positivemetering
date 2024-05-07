import React from 'react'
import '../../Assets/css/services/service.css'
import { Container, Row, Col } from 'react-bootstrap'
import im from '../../Assets/img/serivces/close-up-signing-package-delivery 1.png'
import im3 from '../../Assets/img/serivces/image-removebg-preview (94) 1.png'
import im2 from '../../Assets/img/serivces/Frame 20.png'
import im1 from '../../Assets/img/serivces/Frame 21.png'
import Heading from '../../Components/Heading'
const Servicecard = () => {
  return (
    <>
      <Container className='servicedcardbg py-2 d-none d-lg-block'>
      <Heading heading={"SERVICES"} />
        <p className=' text-center px-lg-5'>We consider us a Solution Providing Business. Therefore offering Services to our customers is considered to be a core activity. Our organisation is built around to offer services in three stages</p>
        <Row className=' d-flex justify-content-evenly py-3' >
          <Col lg={6}>
            <Row className=' d-grid'>
              <Col lg={12} className=''>
                <Row>
                  <Col lg={5}> <img src={im} alt="" className='servicedcard img-fluid' /></Col>
                  <Col lg={7} className='servicedcard servicedcardright p-3 '>
                    <h4 className=' fw-bold '>Pre Order Services</h4>
                    <p>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring their budgets and submitting bids to their customers. </p>
                  </Col>
                  <Col lg={5} className='servicedcardbottom px-4 py-3 d-flex align-items-center'>
                    <h4 className=' text-white py-4'>PRE ORDER SERVICE</h4>
                    <img src={im3} alt="" className='w-50 h-75 img-fluid' />
                  </Col>
                </Row>
              </Col>

              <Col lg={12} className=''>
                <Row>
                  <Col lg={5}> <img src={im2} alt="" className='servicedcard img-fluid' /></Col>
                  <Col lg={7} className='servicedcard servicedcardright p-3 '>
                    <h4 className=' fw-bold '>Pre Order Services</h4>
                    <p>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring their budgets and submitting bids to their customers. </p>
                  </Col>
                  <Col lg={5} className='servicedcardbottom1 px-4 py-3 d-flex align-items-center'>
                    <h4 className=' text-white py-4'>PRE ORDER SERVICE</h4>
                    <img src={im3} alt="" className='w-50 h-75 img-fluid' />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col lg={5} className=' d-flex align-items-center'>
            <Row className=' d-grid'>
              <Col lg={7}> <img src={im1} alt="" className='servicedcard img-fluid' /></Col>
              <Col lg={7} className='servicedcard servicedcardright p-3 '>
                <h4 className=' fw-bold '>Execution</h4>
                <p>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring their budgets and submitting bids to their customers. </p>
              </Col>
              <Col lg={5} className='servicedcardbottom2 px-2 py-3 d-flex align-items-center'>
                <h4 className=' text-white py-4'>Execution</h4>
                <img src={im3} alt="" className='w-50 h-75 img-fluid' />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className=' py-5 d-block d-lg-none'>
        <div className='servicedcardbg1'>
      <Heading heading={"SERVICES"} />

          <p className=' text-center px-lg-5'>We consider us a Solution Providing Business. Therefore offering Services to our customers is considered to be a core activity. Our organisation is built around to offer services in three stages</p>

        </div>  
        <Row className=' d-flex justify-content-evenly ' >

          <Col lg={11} className='py-md-3'>
            <Row>
              <Col sm={6}> <img src={im} alt="" className='servicedcard img-fluid' /></Col>
              <Col sm={6} className='servicedcard servicedcardright p-3  d-grid  align-items-center '>
                <h4 className=' fw-bold '>Pre Order Services</h4>
                <p>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring their budgets and submitting bids to their customers. </p>
              </Col>

            </Row>
          </Col>

          <Col lg={11} className='py-md-3'>
            <Row>
              <Col sm={6}> <img src={im2} alt="" className='servicedcard img-fluid' /></Col>
              <Col sm={6} className='servicedcard servicedcardright p-3 d-grid  align-items-center  '>
                <h4 className=' fw-bold '>Pre Order Services</h4>
                <p>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring their budgets and submitting bids to their customers. </p>
              </Col>
              {/* <Col lg={5} className='servicedcardbottom1 px-4 py-3 d-flex align-items-center'>
                    <h4 className=' text-white py-4'>PRE ORDER SERVICE</h4>
                    <img src={im3} alt="" className='w-50 h-75 img-fluid' />
                  </Col> */}
            </Row>
          </Col>


          <Col lg={11} className=' d-flex align-items-center py-md-3'>
            <Row >
              <Col sm={6}> <img src={im1} alt="" className='servicedcard img-fluid' /></Col>
              <Col sm={6} className='servicedcard servicedcardright p-3 d-grid  align-items-center '>
                <h4 className=' fw-bold '>Execution</h4>
                <p>Application Engineering is one of our main strenghts. Our expert engineers have excellent field experience who can perfectly match our products with customer's needs. Special care is taken by us to offer a cost effective solution in right time. We help our customers in structuring their budgets and submitting bids to their customers. </p>
              </Col>
              {/* <Col lg={5} className='servicedcardbottom2 px-2 py-3 d-flex align-items-center'>
                <h4 className=' text-white py-4'>Execution</h4>
                <img src={im3} alt="" className='w-50 h-75 img-fluid' />
              </Col> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Servicecard