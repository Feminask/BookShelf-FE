import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { delBookApi, getDataApi } from "../services/allApis";

function Home() {
  const [bookData, setBookData] = useState([]);
  const getData = async () => {
    const result = await getDataApi();
    if (result.status >= 200 && result.status < 300) {
      setBookData(result.data);
    }
  };

  const deleteBook = async (id) => {
    await delBookApi(id);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container className="my-5">
      <Row className="mb-4">
        <Col className="d-flex justify-content-center">
          <Link to="/add">
            <Button variant="" style={{backgroundColor:'black',color:"yellow"}}><i class="fa-solid fa-circle-plus"></i> Add New Book</Button>
          </Link>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        {bookData?.length > 0 ? (
          bookData.map((book) => (
            <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="shadow-lg" style={{ height: "600px" }}>
                <Card.Img variant="top" src={book.coverImg} height={"400px"} />
                <Card.Body>
                  <Card.Title className="">
                    {book.title.length > 60
                      ? book.title.slice(0, 30) + "..."
                      : book.title}
                  </Card.Title>
                  <Card.Text className="text-center">
                    <div>{book.author}</div>
                    <div>{book.category}</div>
                  </Card.Text>
                  <div className="d-flex justify-content-between">
                    <Link to={`/edit/${book.id}`}>
                      {/* <Button variant='primary'><i class="fa-solid fa-pen-to-square"></i></Button> */}
                      <Button
                        variant="primary"
                        className="bg-light border-0"
                      >
                        <i
                          className="fas fa-pencil-alt"
                          style={{ color: "#007bff" }}
                        ></i>
                      </Button>
                    </Link>
                    <Button
                      className="bg-light border-0"
                      style={{ color: "red" }}
                      onClick={() => deleteBook(book.id)}
                    >
                      <i className="fas fa-trash"></i>
                    </Button>{" "}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
<div className="mt-5 text-center">
            <h1 >No Books Added Yet</h1>
  
</div>        )}
      </Row>
    </Container>
  );
}

export default Home;
