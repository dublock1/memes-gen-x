import React, { Component } from 'react'
import pug from "./images/pug.gif";
import baby from "./images/baby.jpg";
import cage from "./images/niccage.jpg";
import {Carousel} from 'react-bootstrap'

export default class CarouselMemes extends Component {
    render() {
        return (
            <div>
                <Carousel fade="true">
                <Carousel.Item>
                  
                  <img
                    width="100%"
                    height="100%"
                    className="memeImages"
                    src={baby}
                    alt="first slide"
                    onClick={this.onclick}
                  />
                  
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
                  
                </Carousel.Item>
              </Carousel>
            </div>
        )
    }
}
