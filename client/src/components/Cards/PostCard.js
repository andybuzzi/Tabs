import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Button,
} from "react-bootstrap";

function PostCard({
  post: { firstName, lastName, note, age, city, state, phone },
}) {
  return (
    <Row xs={1} md={3} className="g-4">
      <Col>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.unsplash.com/photo-1456659122552-6ee1788174bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            fluid
          />
          <Card.Body>
            <Card.Title>
              {firstName} {lastName}
            </Card.Title>
            <Card.Text>{note}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem> {age} </ListGroupItem>
            <ListGroupItem>
              {" "}
              {city}, {state}
            </ListGroupItem>
            <ListGroupItem> {phone} </ListGroupItem>

            <Card.Body>
              <Card.Link href="#">🔥</Card.Link>
              <Card.Link href="#">🧊</Card.Link>
            </Card.Body>
            <ListGroupItem>
              {" "}
              <Button link="" variant="outline-dark">
                Edit
              </Button>{" "}
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}

export default PostCard;
