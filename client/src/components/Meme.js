import React, { Component } from "react";
import Meme from './Meme'
import axios from 'axios'
import "../index.css";
import {Redirect} from 'react-router-dom'
import CarouselMemes from "./CarouselMemes";
import {Link} from 'react-router-dom'

export default class Memes extends Component {
  state = {
    newMeme: {
      image: "",
      topText: "",
      bottomText: ""
    },
    clickedImage: "",
    isEditFormDisplayed: false,
    redirectToHome: false
  };

  

  componentDidMount() {
    axios.get(`/api/memes/${this.props.match.params.memeId}`)
    .then((res) => {
      console.log(res.data)
      this.setState({newMeme: res.data})
  })
  }

  handleInputChange = (event) => {
    const copiedMeme = {...this.state.meme}
    copiedMeme[event.target.name] = event.target.value

    this.setState({newMeme: copiedMeme})
}

  handleSubmit = (event) => {
    event.preventDefault()

    axios.put(`/api/memes/${this.state.newMeme._id}`, this.state.newMeme)
        .then((res) => {
            this.setState({
                newMeme: res.data,
                isEditFormDisplayed: false,
                redirectToHome: true
            })
        })
}

onclick = event => {
  const clickedImage = { ...this.state.clickedImage };
  console.log("clicked", event.target);
  this.setState({ clickedImage: event.target.src });
};

handleToggleEditForm = (event) => {
    this.setState((state) => {
        return {isEditFormDisplayed: !state.isEditFormDisplayed}
    })
}

handleDeleteMeme = () => {
    axios.delete(`/api/memes/${this.state.newMeme._id}`)
    .then(() => {
        this.setState({redirectToHome: true})
    })
}

 

  render() {
    

    if(this.state.redirectToHome) {
      return <Redirect to='/' />
  }
    return (
      this.state.isEditFormDisplayed
                    ? <form onSubmit={this.handleSubmit}>
                      <label htmlFor='meme-topText'>Top text</label>
                            <input 
                            type='text'
                            id='meme-topText'
                            name='topText'
                            onChange={this.handleInputChange}
                            value={this.state.newMeme.topText}

                            />
                        
                        
                        
                        <label htmlFor='meme-image'>Meme Image</label>
                        <input
                            type='text' 
                            id='meme-image' 
                            name='image' 
                            onChange={this.handleInputChange} 
                            value={this.state.newMeme.image}
                            />
                            

                            <label htmlFor='meme-bottomText'> BottomText</label>
                            <input 
                            type='text'
                            id='meme-bottomText'
                            name='bottomText'
                            onChange={this.handleInputChange}
                            value={this.state.newMeme.bottomText}

                            />

                            <input 
                                type='submit'
                                value='Update Creature'
                            />
                    </form>
                    : 
                    
      <div>
        
              <p>{this.state.newMeme.topText}</p>
              <img src={this.state.newMeme.image} />
              <p>{this.state.newMeme.bottomText}</p>          
            
        <button onClick={this.handleToggleEditForm}>Edit Meme</button>
        <button onClick={this.handleDeleteMeme}>Delete Meme</button>
        
      </div>
    );
  }
}
