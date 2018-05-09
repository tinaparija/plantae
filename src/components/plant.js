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
                  "description": "Pothos, or epipremnum aureum, is an evergreen vining plant native to the islands of French Polynesia. Its vines grow quite long over time if well cared for. Great for a dramatic wall display or trailing from a hanging planter.  Pothos is also perfect for filtering toxins as it absorbs pollutants such as benzene, formaldehyde and xylene.",
                  "care":["Water every 2 weeks","Indirect to low lighting", "Long vines can be cut and propagated to produce new plants"],
                  "price": "60 for a std. 2 ft. plant"
                }, 
                "Monstera": {
                  "name": "Monstera",
                  "image1": "/images/monstera/MONSTERA1.jpg",
                  "image2": "/images/monstera/monstera2.jpg",
                  "image3": "/images/monstera/monstera3.jpg", 
                  "description": "Monstera deliciosa translates from latin into “delicious monster.” Large split leaves that develop additional cuts and holes with age make this plant an interior design staple. Young plants have few to no cuts. The Monstera originates in Central America, where it grows up tree trunks as high as 30ft, though they remain a much more manageable size indoors. The Monstera makes a fantastic houseplant as it’s easy to care and adds an exotic aesthetic to any atmosphere.",
                  "care":["Water every 1-2 weeks","Indirect medium light or light misting", "Could require stake to maintain shape at larger stages"],
                  "price": "90 for a std. 2 ft. plant."
                }, 
                "FigLeaf": {
                  "name": "Fiddle Leaf Fig",
                  "image1": "/images/fiddleleaf/FLF1.jpg",
                  "image2": "/images/fiddleleaf/FLF2.jpg",
                  "image3": "/images/fiddleleaf/FLF3.jpg", 
                  "description": "The Fiddle Leaf Fig, or ficus lyrata, has experienced a huge boom in popularity recently as the star houseplant of many interior design campaigns. It’s native to Africa where it grows in mild tropics.  Its leaves have a rich green color in the silhouette of a violin.",
                  "care":["Water every 1-2 weeks, only when soil has completely dried","Bright, indirect light in warmer area of the home", "Dust leaves every so often"],
                  "price": "90 for a std. 2 ft. plant"
                }, 
                "Snake": {
                  "name": "Snake Plant",
                  "image1": "/images/snakeplant/Snake1.jpg",
                  "image2": "/images/snakeplant/Snake2.jpg",
                  "image3": "/images/snakeplant/Snake3.jpg", 
                  "description": "The snake plant, or sansevieria trifasciata - laurentii, is commonly called the “mother-in-law’s tongue” because of its lengthy pointed leaves with contrasting yellow border. Native to tropical West Africa, this plant is the most low maintenance house plant you can find. It’s hardy and requires very little water. In the NASA Clean Air Study, the Snake Plant has significant air purification qualities as it removes multiple toxins including carbon dioxide.",
                  "care":["Water every 4-6 weeks (let soil completeley dry between waterings)","Low to medium indirect light", "That's basically it. It's really easy."],
                  "price": "70 for a std. 2 ft. plant"
                }
      }
    }
  }

  render() {
    let plant_name = this.props.type; 
    return (
      <div className = "plant-page">
        <div className = "row">
          <div className = "offset-sm-2 col-sm-8 top-links">
            <a href="/">Back to Home</a>
            <p>To order and schedule delivery, please email <b><a href="mailto:info@plantaesf.com">info@plantaesf.com</a></b></p>
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
          <p>We provide detailed, physical care instructions upon delivery.</p>
          </div>
        </div> 
        <div className="row plant-description">
          <div className = "col-sm-3 offset-sm-1">
            <img src ={this.state.type[plant_name].image3} className ="detail-images" />
          </div>
          <div className = "col-sm-5 plant-details">
            <h5>Pricing</h5>
            <p>${this.state.type[plant_name].price}</p>
            <p> Each plant comes pre-potted in an 8'' self-watering, minimalist pot.</p> 
            <p> If you'd like to order a larger size, please contact us for a custom quote. </p>
            <p> To order, email <a href="mailto:info@plantaesf.com">info@plantaesf.com</a>. </p>
          </div>
        </div> 
        <div className = "col-sm-12 white-space">
        <a href="/">Back to Home</a>
        </div>
      </div>
    );
  }
}

export default withRouter(Plant);
