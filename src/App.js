import React, { Component } from 'react';
import './App.css';
import { Switch, Route} from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import FAQ from './pages/faq'; 


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
          <div className="col offset-sm-9 col-sm-1 header_links">
            <a href="/about">About</a>
          </div>
          <div className="col col-sm-1 header_links header_second_link">
            <a href="/faq">FAQ</a>
          </div>
        </div>
        <div className = "switch_routers">
        <Switch>
          <Route exact path='/'component={Home}/> )} />
          <Route exact path='/about' component={About}/> )} />
          <Route exact path='/faq' component={FAQ}/> )} />
          <Route exact path='/contact' component={Contact}/> )} />
        </Switch>
        </div>
        <div className ="row footer">
          <div className ="phantom">
          <div className = "footer-text col-sm-12">
            <a href="mailto:info@plantaesf.com">info@plantaesf.com</a>
            <a href="https://www.instagram.com/plantae_sf/" target="_blank"> <i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href="https://www.facebook.com/plantaesf/" target="_blank"><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
          </div> 
          </div>
        </div>
      </div>
    );
  }
}

export default App;
