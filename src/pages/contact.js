import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';


class Contact extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className ="col-sm-6 offset-sm-3 contact-form">
        <h3>Order & Contact</h3> 
        <p className="col-sm-8 offset-sm-2">Please fill out the form below and we will get back to you within 2 days.</p>
        </div> 
        <form className = "col-sm-6 offset-sm-3">
          <div className="form-group">
            <label htmlFor="Name">Name</label>
            <input type="text" className="form-control" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" className="form-control" required/>
          </div>
          <div className="form-group">
            <label htmlFor="zipcode">Zip Code</label>
            <input type="text" className="form-control" required/>
          </div>
          <div className="col-sm-12 plant-contact-row">
            <h5>Monstera - $90</h5> 
            <img src ="/images/monstera/MONSTERA1.jpg" className="contact-images"/>
            <div className="form-group col-sm-2 offset-sm-5">
              <label htmlFor="MonsteraQ">Quantity</label>
              <input type="number" className="form-control"/>
            </div>
          </div>
          <div className="col-sm-12 plant-contact-row">
            <h5>Pothos - $60</h5> 
            <img src ="/images/monstera/MONSTERA1.jpg" className="contact-images"/>
            <div className="form-group col-sm-2 offset-sm-5">
              <label htmlFor="PothosQ">Quantity</label>
              <input type="number" className="form-control"/>
            </div>
          </div>
          <div className="col-sm-12 plant-contact-row">
            <h5>Fiddle Leaf Fig - $90</h5> 
            <img src ="/images/monstera/MONSTERA1.jpg" className="contact-images"/>
            <div className="form-group col-sm-2 offset-sm-5">
              <label htmlFor="MonsteraQ">Quantity</label>
              <input type="number" className="form-control"/>
            </div>
          </div>
          <div className="col-sm-12 plant-contact-row">
            <h5>Snake Plant- $70</h5> 
            <img src ="/images/monstera/MONSTERA1.jpg" className="contact-images"/>
            <div className="form-group col-sm-2 offset-sm-5">
              <label htmlFor="MonsteraQ">Quantity</label>
              <input type="number" className="form-control"/>
            </div>
          </div>
          <div className="form-group final-comments">
            <label htmlFor="Additional Comments">Notes, Thoughts, Feelings</label>
            <textarea type="text" className="form-control" rows="5"/>
          </div>
          <button type='submit' className='btn btn-success contact-button'>Submit</button>
        </form> 
      <div className = "white-space">
      </div>
      </div>
    );
  }
}

export default withRouter(Contact);
