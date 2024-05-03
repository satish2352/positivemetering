import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from "../Assets/Header/HeaderImg.png"
let HeaderSection = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/about" },
    { label: "Product", url: "/product" },
    { label: "Service", url: "/service" },
    { label: "Blog", url: "/blog" },
    { label: "News & Event", url: "/news" },
    { label: "Career", url: "/career" },
    { label: "Contact Us", url: "/contact" },
]
function Header() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="HeaderSection py-4">
                <Container fluid className='px-md-5'>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle className='my-3' aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {
                                HeaderSection.map((item, id) => {
                                    return (
                                        <>
                                            <Link className='HeaderStyle mx-lg-3 mx-sm-3' to={item.url}>{item.label}</Link>
                                        </>
                                    )
                                })
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <img className='HeaderLogo' src={logo} alt="" />
        </>
    );
}

export default Header;