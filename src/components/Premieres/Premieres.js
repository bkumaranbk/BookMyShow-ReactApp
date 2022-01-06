import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";


function Premieres() {
    return (
        <div style={{ background: "rgb(43, 49, 72)", padding: "5%" }}>
            <img fluid style={{ width: "100%", height: "1%" }} src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" />
            <h2 style={{ color: "white" }}>Premieres</h2>
            <Carousel indicators={false} variant="dark">
                <Carousel.Item >
                    <CardGroup style={{ gap: "5%" }}>
                        <Card className="bg-slider text-white" style={{height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-white" style={{ height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-white" style={{ height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-white" style={{ height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-white" style={{ height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item >
                    <CardGroup style={{ gap: "5%" }} >
                        <Card className="bg-slider text-white" style={{height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-white" style={{ height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-white" style={{ height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-white" style={{height: "500px", width: "270px", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card className="bg-slider text-white" style={{ height: "500px", width: "270px", border:"none", background: "rgb(43, 49, 72)" }}>
                            <Card.Img style={{ height: "450px", width: "230px", borderRadius: "10px" }} variant="top" src="./assest/OIP.jpg" />
                            <Card.Body>
                                <Card.Title>The Conjuring: The Devil Made Me Do It</Card.Title>
                                <Card.Text>
                                    English
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Premieres;
