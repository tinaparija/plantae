import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';
import Plant from '../components/plant'; 

class Home extends Component {
  constructor(){
    super();
    this.state = {
      plant: ""
    }
    this.setPlant = this.setPlant.bind(this);
  }

  setPlant(e, clicked_plant){
    e.preventDefault()
    this.setState({
      plant: clicked_plant
    })
  }

  render() {
    if (!this.state.plant){
    return (
      <div className = "landing-page">
        <div className = "row landing-top">
          <div className ="col-sm-12">
            <p>Cute, easy care plants delivered.</p>
             <a href="/order"><div className = "order-box">
              <h5>Order</h5>
            </div></a>
          </div> 
        </div>
        <div className = "row landing-description">
          <div className = "col-sm-8 offset-sm-2"> 
            <p>Plantae delivers a rotating selection of gorgeous, easy-to-tend house plants all around the city of San Francisco. Below is our current inventory. </p> 
          </div> 
        </div> 
        <div className = "row shop-preview">
          <div className = "col-sm-6 col-lg-3 preview-box" onClick={(e) => this.setPlant(e, "Monstera")}>
            <h5>Monstera</h5>
            <div className = "row">
              <div className ="col-lg-10 offset-lg-1 col-sm-8 offset-sm-2 preview-image monstera-landing">
              </div>
            </div>
          </div>
          <div className = "col-sm-6 col-lg-3 preview-box" onClick={(e) => this.setPlant(e, "Pothos")}>
            <h5>Pothos</h5>
            <div className = "row">
              <div className ="col-lg-10 offset-lg-1 col-sm-8 offset-sm-2 preview-image pothos-landing">
              </div>
            </div> 
          </div>
          <div className = "col-sm-6 col-lg-3 preview-box" onClick={(e) => this.setPlant(e, "FigLeaf")}>
            <h5>Fiddle Leaf Fig</h5>
            <div className = "row">
              <div className ="col-lg-10 offset-lg-1 col-sm-8 offset-sm-2 preview-image fiddle-landing ">
              </div>
            </div>
          </div>
          <div className = "col-sm-6 col-lg-3 preview-box" onClick={(e) => this.setPlant(e, "Snake")}>
            <h5>Snake Plant</h5>
            <div className = "row">
              <div className ="col-lg-10 offset-lg-1 col-sm-8 offset-sm-2 preview-image snake-landing">
              </div>
            </div>
          </div>
        </div>
        <div className = "row customer-quote d-md-none d-lg-block">
          <div className ="offset-sm-3 col-sm-6 d-sm-none d-xs-none d-md-block">
           <p> "Delivery was super simple and the pothos is beautiful! My room became immediately brighter." - Lily, Alamo Square </p>
           <p> "I'm feeling so green after feeling blue for so long. Thanks, Plantae." - Max, FiDi </p>
          </div>
        </div>
        <div className = "white-space">
        </div>
      </div>
    );
  }

  else{
    return (
      <Plant type = {this.state.plant}/>
    )
  }
  }
}

export default withRouter(Home);
