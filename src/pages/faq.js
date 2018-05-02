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
          <div className ="col-sm-8 offset-sm-3">
            <h4> FAQ </h4> 
            <ul>
             <li> stuff</li>
             <li> stuff</li>
             <li> stuff</li>
             <li> stuff</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(FAQ);
