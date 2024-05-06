import React from 'react'
import mainBanner from "../../Assets/Images/CommonbannerImg.png"
import { Container } from 'react-bootstrap'
const Banner = () => {
    return (
        <>
            <section className='mb-xl-5'>
                <Container fluid className='p-0'>
                    <img src={mainBanner} className='w-100' alt=" career banner" />
                </Container>
            </section>
        </>
    )
}

export default Banner