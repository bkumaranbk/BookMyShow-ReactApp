import Carousel from "react-bootstrap/Carousel";

function SliderImages() {
    return (
        <div className='container-fluid' style={{ marginTop: "10px" }} >

            <div className="row" >
                <div className="col-12">
                    <Carousel>

                        <Carousel.Item>
                            <img
                                style={{ borderRadius: "10px" }}
                                className="d-block w-100 h-90"
                                src="./assest/slider1.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                style={{ borderRadius: "10px" }}
                                className="d-block w-100 h-90"
                                src="./assest/slider2.png"
                                alt="Second slide"
                            />

                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                style={{ borderRadius: "10px" }}
                                className="d-block w-100 h-90"
                                src="./assest/slider3.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>

                        <Carousel.Item >
                            <img
                                style={{ borderRadius: "10px" }}
                                className="d-block w-100 h-90"
                                src="./assest/slider4.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>


                    </Carousel>
                </div>
            </div>
        </div>
    );
}

export default SliderImages;
