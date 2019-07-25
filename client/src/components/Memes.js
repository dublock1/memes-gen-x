import React, { Component } from "react";
import NavBar from "./NavBar";
import pug from "./images/pug.gif";
import baby from "./images/baby.jpg";
import cage from "./images/niccage.jpg";
import "../index.css";
import Canvas from "./Canvas";
import { Carousel, Form, Container, Row, Col } from "react-bootstrap";

export default class Memes extends Component {
  state = {
    newMeme: {
      img: "",
      topText: "",
      bottomText: ""
    },
    clickedImage: "",
    meme: []
  };

  onclick = event => {
    const clickedImage = { ...this.state.clickedImage };
    console.log("clicked", event.target);
    this.setState({ clickedImage: event.target.src });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Row>
            <Col>
              <p>{this.state.topText}</p>
              <img className="memeImages" src={this.state.clickedImage} />
              <p>{this.state.bottomText}</p>
            </Col>
            <Col>
              <Carousel>
                <Carousel.Item>
                  {/* <TouchableHighlight onPress={this.onclick}> */}
                  <img
                    width="100%"
                    height="100%"
                    className="memeImages"
                    src={baby}
                    alt="first slide"
                    onClick={this.onclick}
                  />
                  {/* </TouchableHighlight> */}
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    height="100%"
                    className="memeImages"
                    src={cage}
                    alt="second slide"
                    onClick={this.onclick}
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    width="100%"
                    height="100%"
                    className="memeImages"
                    src={pug}
                    alt="third slide"
                    onClick={this.onclick}
                  />
                  {/* </TouchableHighlight> */}
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
          <Row>
            <Form>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>textarea 1</Form.Label>
                <Form.Control as="textarea" rows="2" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>textarea 2</Form.Label>
                <Form.Control as="textarea" rows="2" />
              </Form.Group>
            </Form>
          </Row>
        </Container>
      </div>
    );
  }
}
