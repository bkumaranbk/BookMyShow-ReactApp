import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Image from "react-bootstrap/Image";

function CardsSlider() {
    return (
        <div style={{ background: "#f8f8f8", padding: "5%", marginTop: "10px" }}>
            <div>
                <Image src="./assest/top.png" fluid style={{ marginBottom: "40px" }} />
            </div>
            <div>
                <h4>The Best of Entertainment</h4>
            </div>
            <Carousel indicators={false} >

                <Carousel.Item >
                    <CardGroup style={{ display: "flex", gap: "5%", justifyContent: "space-around" }}>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTU1KyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/workshops-collection-202007231330.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/fitness-collection-2020081150.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NDUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/kids-collection-202007220710.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-ODArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/comedy-shows-collection-202007220710.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTAgRXZlbnRz,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/music-shows-collection-202007220710.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item >
                    <CardGroup style={{ display: "flex", gap: "5%", justifyContent: "space-around" }}>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/esports-collection-202011150107.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MjArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/self-improvement-collection-202007220710.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/cooking-collection-202007222211.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-OSBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/interactive-games-collection-202012041129.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                        <Card className="bg-white text-white" style={{ height: "220px", width: "220px" }}>
                            <Card.Img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTArIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300/art-and-crafts-collection-202007220710.png" alt="Card image" style={{ height: "220px", width: "220px", borderRadius: "10px" }} />

                        </Card>
                    </CardGroup>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default CardsSlider;
