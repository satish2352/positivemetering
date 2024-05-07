import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import ownerImg from "../../Assets/About/OwnerImg.png"
const AboutUsComp = () => {
    return (
        <>
            <section className='py-4'>
                <Container>
                    <Card className='py-5 shadow-lg border-0'>
                        <Row>
                            <Col xl={4}>
                                <img src={ownerImg} className='w-100' alt="ownerImg" />
                            </Col>
                            <Col xl={7}>
                                <h2 className='text-uppercase' style={{ letterSpacing: "2px" }}>About Us</h2>
                                <p style={{ textAlign: "justify", fontSize: "0.75rem" }}>The Founder of our company Mr. Sudhir Mutalik is a passionate mechanical engineer graduated from the reputed Government College of Engineering, Karad near Pune, India. Diesel Engines has been his interest for study since his university days. He was selected by the world's well-known Diesel Engine manufacturer Kirloskar Oil Engines Ltd through campus recruitment. After working with KOEL for a short while his love for Diesel Engines and precisely the slider-crank mechanism attracted him towards Chemical Dosing Pumps, the drive end of which also works on a similar principle. After working over the product for a few years and studying applications in various sectors Positive Metering Pumps company was founded in 1996 for manufacturing of Chemical Dosing Pumps and Skid Mounted Chemical Dosing Systems.<br /> With a vision to "Simplify Chemical Treatments in the world" after 25 years today Positive Metering Pumps (I) Pvt Ltd has done more than 125,000 installations of various products in 40 different countries of the world. The company is thankful to each and every customer for a great support so far without which the journey would not been so glorious. We have evolved as a reliable solution provider in the areas of Liquid storage, ( Solution preparation) Mixing, Dosing, and transfer. The business is totally customer-centric and the sole purpose is to provide the right and cost-effective solution.
                                </p>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </section>
        </>
    )
}

export default AboutUsComp