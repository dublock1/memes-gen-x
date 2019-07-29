import React, { Component } from "react";
import Meme from "./Meme";
import CarouselMemes from "./CarouselMemes";
import { Button } from "react-bootstrap";
import Memes from "./Memes";
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class HomePage extends Component {
  state = {
    isNewFormDisplayed: true,
    memes: []
  };

  componentDidMount() {
    this.getAllMemes();
  }

  getAllMemes = () => {
    axios.get("/api/memes").then(res => {
      this.setState({ memes: res.data });
    });
  };

  handleToggleNewForm = event => {
    this.setState(state => {
      return { isNewFormDisplayed: !state.isNewFormDisplayed };
    });
  };

  render() {
    let memeList = this.state.memes.map(meme => {
      return (
        <div>
          <Link key={meme._id} to={`/memes/${meme._id}`}>
            <p>topText={meme.topText}</p>
            <img src={meme.image}/>
            <p>bottomText={meme.bottomText}</p>            
          </Link>
        </div>
      );
    });
    return (
      <div>
        <div>
          {this.state.isNewFormDisplayed ? (
            <div>
              <CarouselMemes />
              {memeList}
            </div>
          ) : (
            <Memes handleToggleNewForm={this.handleToggleNewForm} />
          )}
        </div>
        <Button onClick={this.handleToggleNewForm}>Create</Button>
      </div>
    );
  }
}
