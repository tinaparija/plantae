import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';

class FAQ extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className="row faq-content">
          <div className ="col-sm-7 offset-sm-3">
            <h4> Frequently Asked Questions </h4>  
              <div className = "question-block">
                <h5>What are your delivery hours?</h5>
                <p> Our hours are pretty flexible but generally 9am-9pm. When you inquire about your purchase we’ll coordinate a delivery time. </p>
              </div> 
              <div className = "question-block">
                <h5>Where will you deliver?</h5>
                <p> Within the 7X7 that make up San Francisco. For deliveries out of this zone, please email your inquiry to <a href="mailto:info@plantaesf.com">info@plantaesf.com</a>. </p>
              </div> 
              <div className = "question-block">
                <h5>How do I arrange for a plant to be gifted?</h5>
                <p> We can make special accommodations for gifted plants with advance notice. Please email us at <a href="mailto:info@plantaesf.com">info@plantaesf.com</a> with at least two weeks notice. </p>
              </div> 
              <div className = "question-block">
                <h5>How do I pick the right plant for my living conditions?</h5>
                <p> All of our plants do well under most lighting conditions but remember, plants need light to grow and thrive. If in doubt, take a picture of your space showing the lighting and ask us our thoughts!</p>
              </div> 
              <div className = "question-block">
                <h5>Shit, I think my plant is dying! What's going on?</h5>
                <p> Most plants lose leaves as they mature, one or two is common. If the whole plant looks unhappy, check to make sure it has water or has been over watered (i.e. there's pooled water at the bottom of the pot). If it's more complicated than that, email us at <a href="mailto:info@plantaesf.com">info@plantaesf.com</a>.</p>
              </div>
              <div className = "question-block">
                <h5>Are your plants safe for pets?</h5>
                <p> While you might like your plants, some are not safe for pets. Everything in our selection could be potentially toxic to pets. If you have a pet and choose a potentially toxic plant, we assume no liability. Be sure to place the plant out of Fido’s reach and clip of any dying leaves before they fall to the floor.</p>
              </div> 
              <div className = "question-block">
                <h5>Do you accept returns?</h5>
                <p> As our plants are delivered, we will offer a partial refund within seven days of delivery. </p>
              </div> 
              <div className = "question-block">
                <h5>What does Plantae mean?</h5>
                <p> <a href="http://www.ucmp.berkeley.edu/plants/plantae.html"> Plantae</a> is a broad term used to refer to all plants from cacti, ferns (the most populous subspecies), mosses, and general flowering plants. There are over 300,000 species of plants that make up the biological kingdom of plantae. </p>
              </div> <div className = "question-block">
                <h5>How do you pronounce "plantae"?</h5>
                <p> <i>Plan-ti.</i></p>
              </div> 
              <div className = "question-block">
                <h5>I don't see a specific plant &mdash; can you get it for me?</h5>
                <p> Shoot us an email at <a href="mailto:info@plantaesf.com">info@plantaesf.com</a> and we will get back to you with availability and an estimated cost. </p>
              </div>
              <div className = "white-space">
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FAQ);
