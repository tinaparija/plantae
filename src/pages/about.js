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
          <div className ="col-sm-5 offset-sm-6">
            <h4>Plantae painlessly brings the beauty and health benefits of indoor plants to urban homes. </h4>
            <div className = "row store-description">
              <div className = "col-sm-10">
                <p>We deliver cute, easy care plants pre-potted within minimalist pots. All plants come with care instructions. We're dedicated to sourcing our plants from Bay Area nurseries.</p>
                <a href="/" className="text-info"> Selection </a><br></br>
                <a href="/order" className="text-info">Order</a>
              </div> 
            </div> 
          </div> 
        </div>
        <div classname = "row">
          <div className = "col-sm-10 offset-sm-1 about-title">
            <h4> Plant People </h4> 
          </div>
        </div> 
        <div className = "about-us row">
          <div className ="col-sm-10 offset-sm-1">
            <img src = "/images/aboutus/keithtina.jpg" className = "about-keithtina"/>
          </div>
        </div>
        <div className ="row about-plantae">
            <div className ="col-sm-6 offset-sm-3">
            <h4> Our Story </h4> <br/> 
            <p> Keith and Tina met in an evening rhetoric course at UC Berkeley. Years later, their love of plants and home decoration brought them together again at a coffee shop in Hayes Valley. Within an hour, it was clear that they couldn't keep this love just between them &mdash; they had to share their experiences with the world. So began <i>Plantae</i>. We're so glad you're here. </p>
            </div>
        </div>
          <div className = "white-space">
          </div>
      </div>
    );
  }
}

export default withRouter(About);
