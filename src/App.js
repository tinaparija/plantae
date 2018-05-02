import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Shop from './pages/shop';
import FAQ from './pages/faq'; 
import Plant from './components/plant';


class App extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className = "container-fluid">
        <div className ="row header" >
          <div className="col col-sm-1">
              <a href="/"><img src="images/plantaelogotrans.png" alt="logo" height="35" width="160"/></a>
          </div>
          <div className="col offset-sm-9 col-sm-1 header_links header_second_link">
            <a href="/about">About</a>
          </div>
          <div className="col col-sm-1 header_links">
            <a href="/faq">FAQ</a>
          </div>
        </div>
        <div className = "switch_routers">
        <Switch>
          <Route exact path='/'component={Home}/> )} />
          <Route exact path='/about' component={About}/> )} />
          <Route exact path='/faq' component={FAQ}/> )} />
          </Switch>
        </div>
        <div className ="row footer">
          <div className ="phantom">
          <div className = "footer-text col-sm-12">
            <a href="mailto:plantae.sf@gmail.com">plantae.sf@gmail.com</a>
          </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
