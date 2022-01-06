import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import data from "./movies.json";

import axios from "axios";
import { useState, useEffect } from "react";



function AllMoviesFetch() {

    const [data, setData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get('https://bms-clone-backend.herokuapp.com/movies');
            console.log(response);
            // data = response;
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <div>
            <Container fluid style={{ padding: "5%", backgroundColor: "#F8F8F8" , }}>

                <Row style={{ textAlign: 'center', }}>
                    {data.map((mov) =>
                        <Col onClick={() => window.location.href = "/movies/" + mov._id} key={mov._id} xs={6} md={4} lg={3} style={{ marginTop: "2%", cursor: "pointer" }}>
                            <Card>
                                <Card.Img variant="top" src={mov.imageurl} />
                                <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>
                                        {mov.actor}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>

            </Container>
        </div>
    );

}

export default AllMoviesFetch;