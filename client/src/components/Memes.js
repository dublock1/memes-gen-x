import React, { Component } from "react";
import {Link} from 'react-router-dom'
import HomePage from "./HomePage";
import axios from "axios";

export default class Meme extends Component {
  state = {
    isNewFormDisplayed: false,
    hasMemesBeenCreated: false,
    newMeme: {
      image: "",
      topText: "",
      bottomText: ""
    },
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

  handleMemeSubmit = e => {
    e.preventDefault();

    axios.post("/api/memes", this.state.newMeme).then(() => {
      this.setState({ isNewFormDisplayed: false });
      this.props.handleToggleNewForm();
      this.getAllMemes();
    });
  };

  handleInputChange = event => {
    const copiedMeme = { ...this.state.newMeme };
    copiedMeme[event.target.name] = event.target.value;

    this.setState({ newMeme: copiedMeme });
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
        <form onSubmit={this.handleMemeSubmit}>
        <label htmlFor="new-meme-topText">Top Text</label>
          <input
            type="text"
            id="new-meme-topText"
            name="topText"
            onChange={this.handleInputChange}
            value={this.state.newMeme.topText}
          />
         
          <label htmlFor="new-meme-image">image</label>
          <input
            type="text"
            id="new-meme-image"
            name="image"
            onChange={this.handleInputChange}
            value={this.state.newMeme.image}
          />
          

          <label htmlFor="new-meme-bottomText">Bottom Text</label>
          <input
            type="text"
            id="new-meme-bottomText"
            name="bottomText"
            onChange={this.handleInputChange}
            value={this.state.newMeme.bottomText}
          />

          <input type="submit" value="Add Meme" />
        </form>

        <div>
          
        </div>
      </div>
    );
  }
}
