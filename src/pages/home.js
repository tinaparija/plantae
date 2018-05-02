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
          </div> 
        </div>
        <div className = "row shop-preview">
          <div className = "col-sm-3 preview-box" onClick={(e) => this.setPlant(e, "Monstera")}>
            <h5>Monstera</h5>
            <div className = "row">
              <div className ="col-sm-10 offset-sm-1 preview-image monstera-landing">
              </div>
            </div>
            <div className = "row">
              <div className ="col-sm-10 offset-sm-1 landing-plant-description">
                <p>$100, 3 ft. </p> 
              </div>
            </div> 
          </div>
          <div className = "col-sm-3 preview-box" onClick={(e) => this.setPlant(e, "Pothos")}>
            <h5>Pothos</h5>
            <div className = "row">
              <div className ="col-sm-10 offset-sm-1 preview-image pothos-landing">
              </div>
            </div> 
            <div className = "row">
              <div className ="col-sm-10 offset-sm-1 landing-plant-description">
                <p>$60, 2 ft. </p> 
              </div>
            </div> 
          </div>
          <div className = "col-sm-3 preview-box" onClick={(e) => this.setPlant(e, "FigLeaf")}>
            <h5>Fiddle Leaf Fig</h5>
            <div className = "row">
              <div className ="col-sm-10 offset-sm-1 preview-image fiddle-landing ">
              </div>
            </div>
            <div className = "row">
              <div className ="col-sm-10 offset-sm-1 landing-plant-description">
                <p>$140, 3 ft. </p> 
              </div>
            </div> 
          </div>
          <div className = "col-sm-3 preview-box" onClick={(e) => this.setPlant(e, "Snake")}>
            <h5>Snake Plant</h5>
            <div className = "row">
              <div className ="col-sm-10 offset-sm-1 preview-image snake-landing">
              </div>
            </div>
            <div className = "row">
              <div className ="col-sm-10 offset-sm-1 landing-plant-description">
                <p>$60, 3 ft. </p> 
              </div>
            </div> 
          </div>
        </div>
        <div className = "row customer-quote">
          <div className ="offset-sm-3 col-sm-6 d-sm-none d-xs-none d-md-block">
           <p> "Brought me some fucking dope plants." - Tina </p>
          </div>
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
