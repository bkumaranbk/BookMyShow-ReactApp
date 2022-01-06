import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import SingleData from "./movies.json";
import { useParams } from "react-router";


import axios from "axios";
import { useState, useEffect } from "react";


function SingleMovieFetch() {

    const { movid } = useParams();
    const [SingleData, setSingleData] = useState([]);

    useEffect(async () => {
        try {
            const response = await axios.get(`https://bms-clone-backend.herokuapp.com/movies/${movid}`);
            console.log(response);
            // SingleData = response;
            setSingleData([response.data]);
        } catch (error) {
            console.error(error);
        }
    }, [])

    return (
        <div>
            <Container fluid style={{ padding: "5%", backgroundColor: "white" }}>

                <Row style={{ textAlign: 'center' }}>
                    {SingleData.map((mov) => {

                        return (
                            <Col key={mov._id} xs={6} md={4} lg={3} style={{ marginTop: "2%" }}>
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
                        );
                    })}
                </Row>

            </Container>
        </div>
    );

}

export default SingleMovieFetch;