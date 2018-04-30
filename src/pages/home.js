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
      <div>
        <div className = "row landing-top">
          <div className ="col-md-12">
            <p>Cute, easy care plants delivered.</p>
          </div> 
        </div>
        <div className = "row shop-preview">
          <div className = "col-md-3 preview-box" onClick={(e) => this.setPlant(e, "Monstera")}>
            <h6>Monstera</h6>
            <div className = "row">
              <div className ="col-md-10 col-md-1 col-sm-10 offset-sm-1 preview-image monstera-landing">
              </div>
            </div>
          </div>
          <div className = "col-md-3 preview-box" onClick={(e) => this.setPlant(e, "Pothos")}>
            <h6>Pothos</h6>
            <div className = "row">
              <div className ="col-md-10 col-md-1 col-sm-10 offset-sm-1 preview-image pothos-landing">
              </div>
            </div> 
          </div>
          <div className = "col-md-3 preview-box" onClick={(e) => this.setPlant(e, "FigLeaf")}>
            <h6>Fiddle Leaf Fig</h6>
            <div className = "row">
              <div className ="col-md-10 col-md-1 col-sm-10 offset-sm-1 preview-image fiddle-landing ">
              </div>
            </div>
          </div>
          <div className = "col-md-3 preview-box" onClick={(e) => this.setPlant(e, "Snake")}>
            <h6>Snake Plant</h6>
            <div className = "row">
              <div className ="col-md-10 col-md-1 col-sm-10 offset-sm-1 preview-image snake-landing">
              </div>
            </div>
          </div>
        </div>
        <div className = "row customer-quote">
          <div className ="offset-md-3 col-md-6 d-sm-none d-xs-none d-md-block">
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
