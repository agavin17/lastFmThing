import React, { Component } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class MusicBox extends Component {
  constructor() {
    super();
    this.buttonPush = this.buttonPush.bind(this);
    this.handleChange = this.handleChange.bind(this);
     this.state = {
      inputArtist: "",
      artistUrl: null,
      artistName: null,
      artistInfo: null,
      similarAlbums2: null,
      similarAlbums3: null,
      similarAlbums4: null,
      similarAlbums5: null,
      similarAlbums6: null,

      }
    }

    handleChange({ target }) {
      this.setState({
        inputArtist: target.value
      });
    }

    buttonPush() {
      const reqOne =  axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${this.state.inputArtist}&api_key=ccc615426c5787f6b49763993e7bfab3&format=json`);
      const reqTwo =  axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${this.state.inputArtist}&api_key=ccc615426c5787f6b49763993e7bfab3&format=json`);
      axios.all([reqOne, reqTwo]).then(axios.spread((...responses) => {
        const responseOne = responses[0]
        const responseTwo = responses[1]
                    this.setState({
              artistUrl: responseOne.data.artist.url,
              artistName: responseOne.data.artist.name,
              artistInfo: responseOne.data.artist.bio.summary,
              similarAlbums: responseTwo.data.topalbums.album[0].image[2]["#text"],
              similarAlbums2: responseTwo.data.topalbums.album[1].image[2]["#text"],
              similarAlbums3: responseTwo.data.topalbums.album[2].image[2]["#text"],
              similarAlbums4: responseTwo.data.topalbums.album[3].image[2]["#text"],
              similarAlbums5: responseTwo.data.topalbums.album[4].image[2]["#text"],
              similarAlbums6: responseTwo.data.topalbums.album[5].image[2]["#text"],
            }); 

      })).catch(errors => {
        // react on errors.
      })}

    render() {
        return (
            <div>
              <input type="text" value={this.state.inputArtist} onChange={this.handleChange} ></input>
                 <Button variant="info" size='lg' onClick={this.buttonPush}>GO!</Button>
    <Card bg= "dark" text="white">         
     <h2>{this.state.artistName}</h2>
          <Card.Body>
            <img src= {this.state.similarAlbums}/>
            <img src= {this.state.similarAlbums2}/>
            <img src= {this.state.similarAlbums3}/>
            <img src= {this.state.similarAlbums4}/>
            <img src= {this.state.similarAlbums5}/>
            <img src= {this.state.similarAlbums6}/>
          </Card.Body>
          {this.state.artistInfo}
    </Card>
            </div>
        );
    }
}

export default MusicBox;