import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Layout from "./Layout";

const RetriveUser = () => {
    const { userId } = useParams();
    const getUserEndpoint = `http://localhost:4000/v1/user/${userId}`;

    const [user, setUser] = useState({});

    const fetchUsers = async () => {
        try {
            const { data: apiResponse } = await axios.get(`${getUserEndpoint}`);
            setUser(apiResponse);
        } catch (err) {
            setUser(null);
        }
    };

    useEffect(() => {
        fetchUsers()
    }, [userId]);


    return (
        <Layout>
            {user ? (
                <Row className="justify-content-center">
                    <Col lg={5}>
                        <h3 className='text-center mb-3'>{user.name}</h3>
                        <Card>
                            <Card.Body className="text-center">
                                <p>{user.email}</p>
                                {user.city && user.country && (
                                    <p>
                                        {user.city} - {user.country}
                                    </p>
                                )}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            ) : (
                <p className="text-center text-danger fw-bold">
                User cannot be found.
                </p>
            )}
        </Layout>
    );
}

export default RetriveUser;