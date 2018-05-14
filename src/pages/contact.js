import React, { Component } from 'react';

class Contact extends Component {
  constructor(){
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div>
      <div className="row contact-content">
          <div className ="col-sm-7 offset-sm-3">
            <h4> Orders & Availability </h4>
            <form>
              <div className="form-group">
                  <label htmlFor="Name">Your Name</label>
                  <input type="text" className="form-control" required/>
              </div>
              <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" required/>
              </div>
              <div className="form-group col col-sm-12">
                  <label htmlFor="Plants">How many of each plant do you want?</label>
                <div className ="col col-sm-12 plants-order"> 
                    <div className="col-sm-6"> 
                      <p> Monstera:</p>
                      <img src="/images/monstera/MONSTERA1.jpg" className ="detail-images"/>
                    </div>
                    <div className = "col-sm-4">
                      <select>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col-sm-6"> 
                      <p> Monstera:</p>
                      <img src="/images/monstera/MONSTERA1.jpg" className ="detail-images"/>
                    </div>
                    <div className = "col-sm-4">
                      <select>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                    <div className="col-sm-6"> 
                      <p> Monstera:</p>
                      <img src="/images/monstera/MONSTERA1.jpg" className ="detail-images"/>
                    </div>
                    <div className = "col-sm-4">
                      <select>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div> 
                    <div className="col-sm-6"> 
                      <p> Monstera:</p>
                      <img src="/images/monstera/MONSTERA1.jpg" className ="detail-images"/>
                    </div>
                    <div className = "col-sm-4">
                      <select>
                        <option>0</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                </div> 
              </div>
            </form>
            <div className = "white-space">
          </div>
          </div>
      </div>
      </div>
    );
  }
}

export default Contact;
