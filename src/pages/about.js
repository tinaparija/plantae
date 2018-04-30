import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

class About extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className = "row store-banner">
          <div className ="col-md-5 offset-md-6 col-sm-5 offset-sm-6">
            <h4>Plantae painlessly brings the beauty and heath benefits of indoor plants to urban homes. </h4>
            <div className = "row store-description">
              <div className = "col-md-10">
                <p>We deliver cute, easy care plants pre-potted within minimalist vases. All plants come with care instructions. We're dedicated to sourcing our plants from North Bay growers.</p>
                <a href="/" className="text-info"> Shop Now </a>
              </div> 
            </div> 
          </div> 
        </div>
        <div classname = "row">
          <div className = "col-md-10 offset-md-1 about-title">
            <h4> Plant People </h4> 
          </div>
        </div> 
        <div className = "about-us row">
          <div className ="about-photos col-md-10 offset-md-1">
            <img src = "/images/aboutus/keithtina.jpg" className = "about-pics"/>
          </div>
        </div>
        <div className ="row about-plantae">
            <div className ="col-md-6 offset-md-3 col-sm-12">
            <h4> Our Story </h4> <br/> 
            <p> Keith and Tina met in an evening rhetoric course at UC Berkeley. Years later, their love of plants and home decoration brought them together again at a coffee shop in Hayes Valley. Within an hour, it was clear that they couldn't keep this love just between them; they had to share their experiences with the world. So began <i>Plantae</i>. We're so glad you're here. </p>
            </div>
        </div>
          <div className = "white-space">
            <a href="/" className="text-info"> Back to Main </a>
          </div>
      </div>
    );
  }
}

export default withRouter(About);
