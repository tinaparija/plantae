import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

class Plant extends Component {
  constructor(){
    super();
    this.state = {
      type : {
                "Pothos": {
                  "name": "Pothos",
                  "image1": "/images/pothos/pothos1.jpg",
                  "image2": "/images/pothos/pothos2.jpg",
                  "image3": "/images/pothos/pothos3.jpg", 
                  "description": "Pothos ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "care":["blah","blah", "blah"],
                  "price": "60 for a std. 2 ft. plant"
                }, 
                "Monstera": {
                  "name": "Monstera",
                  "image1": "/images/monstera/MONSTERA1.jpg",
                  "image2": "/images/monstera/monstera2.jpg",
                  "image3": "/images/monstera/monstera3.jpg", 
                  "description": "Monstera ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "care":["blah","blah", "blah"],
                  "price": "100 for a std. 3 ft. plant"
                }, 
                "FigLeaf": {
                  "name": "Fiddle Leaf Fig",
                  "image1": "/images/fiddleleaf/FLF1.jpg",
                  "image2": "/images/fiddleleaf/FLF2.jpg",
                  "image3": "/images/fiddleleaf/FLF3.jpg", 
                  "description": "FigLeaf ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "care":["blah","blah", "blah"],
                  "price": "140 for a std. 3 ft. plant"
                }, 
                "Snake": {
                  "name": "Snake Plant",
                  "image1": "/images/snakeplant/Snake1.jpg",
                  "image2": "/images/snakeplant/Snake2.jpg",
                  "image3": "/images/snakeplant/Snake3.jpg", 
                  "description": "Snake ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  "care":["blah","blah", "blah"],
                  "price": "60 for a std. 2 ft. plant"
                }
      }
    }
  }

  render() {
    let plant_name = this.props.type; 
    return (
      <div className = "plant-page">
        <div className = "row">
          <div className = "offset-md-2 col-md-8 top-links">
            <a href="/">Back to Home</a>
            <p>To order and schedule delivery, please email <b>plantae.sf@gmail.com</b></p>
          </div>
        </div>
        <div className="row plant-description">
          <div className = "col-sm-3 offset-sm-1">
            <img src ={this.state.type[plant_name].image1} className ="detail-images" />
          </div>
          <div className = "col-sm-5 plant-details">
            <h5>{this.state.type[plant_name].name}</h5>
            <p>{this.state.type[plant_name].description}</p>
          </div>
        </div> 
        <div className="row plant-description">
          <div className = "col-sm-3 offset-sm-1">
            <img src ={this.state.type[plant_name].image2} className ="detail-images" />
          </div>
          <div className = "col-sm-5 plant-details">
          <h5>Care Details</h5>
          <ul>
            <li>{this.state.type[plant_name].care[0]}</li>
            <li>{this.state.type[plant_name].care[1]}</li>
            <li>{this.state.type[plant_name].care[2]}</li> 
          </ul>
          </div>
        </div> 
        <div className="row plant-description">
          <div className = "col-sm-3 offset-sm-1">
            <img src ={this.state.type[plant_name].image3} className ="detail-images" />
          </div>
          <div className = "col-sm-5 plant-details">
            <h5>Pricing</h5>
            <p>${this.state.type[plant_name].price}</p>
            <p> Each plant comes pre-potted in a minimalist, water friendly pot. We provide physical care instructions upon delivery.</p> 
            <p> To order, please email plantae.sf@gmail.com. </p> 
          </div>
        </div> 
        <div className = "row white-space">
        </div>
      </div>
    );
  }
}

export default withRouter(Plant);
