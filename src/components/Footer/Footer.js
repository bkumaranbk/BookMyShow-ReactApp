import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function Footer() {
    return (
        <div class="foot" style={{ background: "black", color: "white" }}>
            <Container fluid>
                <Row style={{ padding: "3%" }}>
                    <Col xs={{ offset: 1, span: 2 }}>
                        CUSTOMER CARE
                    </Col>
                    <Col xs={4}>
                        RESEND BOOKING INFORMATION 
                    </Col>
                    <Col xs={5} style={{ display: "flex", flexDirection: "row-reverse" }}>
                        <Button style={{ background: "rgb(236, 94, 113)", border: "none"}}>Contact Today!</Button>
                    </Col>
                </Row>
                <Row style={{ textAlign: "center", padding: "3%", background: "grey" }}>
                    <Col>
                    Top and Popular Trending Theatres
                    <p style={{ align: "left", fontSize: "small"}}>
                    Scope Cinemas: Colombo City Center | Liberty By Scope Cinemas: Colombo |

                    </p>
                    </Col>
                    <Col>
                    POPULAR MOVIES BY LANGUAGE
                    <p style={{ align: "left", fontSize: "small"}}>
                    Scope Cinemas: Colombo City Center |  Latest Tamil Movies | Latest English Movies 

                    </p>

                    </Col>
                    <Col>
                    MOVIES BY GENRE
                    <p style={{ align: "left", fontSize: "small"}}>

                    Best Action Movies | Best Romantic Movies | Best Comedy Movies | Best Adventure Movies | Best Biography Movies | Best Crime Movies | Best Drama Movies | Best Family Movies | Best Fantasy Movies | Best History Movies | Best Musical Movies | Best Mystery Movies | Best Sci-Fi Movies | Best Thriller Movies |
                    </p>
                    </Col>
                </Row>
                <Row style={{ textAlign: "center", padding: "3%", background: "grey" }}>
                    <Col>
                    
                    </Col>
                    <Col>

                     <img style={{ height:"100px" , width:"auto" }} src="./assest/logo.png" />
                   
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
