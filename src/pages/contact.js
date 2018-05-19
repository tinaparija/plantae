import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';


class Contact extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      email:'',
      phone: '',
      zipcode: '',
      monsteraQ: '',
      pothosQ:'',
      flfQ:'',
      snakeQ:'',
      comments: '', 
      form_submmitted: ''
    }
    this.updateMyState = this.updateMyState.bind(this);
    this.postForm = this.postForm.bind(this);
  }

  updateMyState(stateKey) {
    return (e) => {
        this.setState({
            [stateKey]: e.target.value
        })
    }
  }

  postForm(e){
    e.preventDefault();
    fetch(`https://secret-badlands-12194.herokuapp.com/api/messages`, {  
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name:this.state.name,
            email:this.state.email,
            phone: this.state.phone,
            zipcode: this.state.zipcode, 
            monsteraQ: this.state.monsteraQ,
            pothosQ: this.state.pothosQ,
            flfQ: this.state.flfQ,
            snakeQ: this.state.snakeQ,
            comments: this.state.comments, 
        }), credentials: this.state.credentials
    }).then((res) => {
        console.log(res)
        return res.json()
    }).then((json) => {
        this.setState({
          form_submitted: "yes"
      })
    });
  }

  render() {
    if (!this.state.form_submitted){
      return (
      <div className = "contact-container">
        <div className ="form-container col-sm-6 offset-sm-3">
          <div className ="col-sm-12 contact-form">
          <h3>Order & Contact</h3> 
          <p className="col-sm-8 offset-sm-2">Please fill out the form below. We will coordinate a deliver with you shortly.</p>
          </div> 
          <form className = "col-sm-8 offset-sm-2" onSubmit={this.postForm}>
            <div className="form-group">
              <label htmlFor="Name">Name</label>
              <input type="text" className="form-control input-sm" required onChange={this.updateMyState('name')}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" className="form-control input-sm" required onChange={this.updateMyState('email')}/>
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone #</label>
              <input type="text" className="form-control input-sm" required onChange={this.updateMyState('phone')}/>
            </div>
            <div className="form-group">
              <label htmlFor="zipcode">Zip Code</label>
              <input type="text" className="form-control input-sm" required onChange={this.updateMyState('zipcode')}/>
            </div>
            <div className="col-sm-12 plant-contact-row">
              <h5>Monstera - $90</h5> 
              <img src ="/images/monstera/MONSTERA1.jpg" className="contact-images"/>
              <div className="form-group col-sm-6 offset-sm-3">
                <label htmlFor="MonsteraQ">Quantity</label>
                <input type="number" className="form-control input-sm" onChange={this.updateMyState('monsteraQ')}/>
              </div>
            </div>
            <div className="col-sm-12 plant-contact-row">
              <h5>Pothos - $60</h5> 
              <img src ="/images/Pothos/pothos1.jpg" className="contact-images"/>
              <div className="form-group col-sm-6 offset-sm-3">
                <label htmlFor="PothosQ">Quantity</label>
                <input type="number" className="form-control input-sm" onChange={this.updateMyState('pothosQ')}/>
              </div>
            </div>
            <div className="col-sm-12 plant-contact-row">
              <h5>Fiddle Leaf Fig - $90</h5> 
              <img src ="/images/fiddleleaf/FLF1.jpg" className="contact-images"/>
              <div className="form-group col-sm-6 offset-sm-3">
                <label htmlFor="MonsteraQ">Quantity</label>
                <input type="number" className="form-control" onChange={this.updateMyState('flfQ')}/>
              </div>
            </div>
            <div className="col-sm-12 plant-contact-row">
              <h5>Snake Plant- $70</h5> 
              <img src ="/images/snakeplant/Snake1.jpg" className="contact-images"/>
              <div className="form-group col-sm-6 offset-sm-3">
                <label htmlFor="MonsteraQ">Quantity</label>
                <input type="number" className="form-control input-sm" onChange={this.updateMyState('snakeQ')}/>
              </div>
            </div>
            <div className="form-group final-comments">
              <label htmlFor="Additional Comments">Notes, Thoughts, Feelings</label>
              <textarea type="text" className="form-control" rows="5" onChange={this.updateMyState('comments')}/>
            </div>
            <button type='submit' className='btn btn-success contact-button '>Submit</button>
          </form>
        </div> 
      </div>
    );
  }
  else{
    return( 
            <div className = "contact-container">
        <div className ="form-container col-sm-6 offset-sm-3">
          <div className ="col-sm-12 contact-form">
          <h3>Order & Contact</h3> 
          <p className="col-sm-8 offset-sm-2">Thanks for reaching out! We'll be back to you in the nect couple days.</p>
          </div> 
          <form className = "col-sm-8 offset-sm-2">
            <div className="form-group thanks-container">
            </div>
            <div className="form-group">
            </div>
            <div className="form-group">
            </div>
            <div className="form-group">
            </div>
            <div className="col-sm-12 plant-contact-row">
            </div>
            <div className="col-sm-12 plant-contact-row">
            </div>
            <div className="col-sm-12 plant-contact-row">
            </div>
            <div className="col-sm-12 plant-contact-row">
              <h5>Snake Plant- $70</h5> 
              <img src ="/images/snakeplant/Snake1.jpg" className="contact-images"/>
              <div className="form-group col-sm-6 offset-sm-3">
                <label htmlFor="MonsteraQ">Quantity</label>
                <input type="number" className="form-control input-sm" onChange={this.updateMyState('snakeQ')}/>
              </div>
            </div>
            <div className="form-group final-comments">
              <label htmlFor="Additional Comments">Notes, Thoughts, Feelings</label>
              <textarea type="text" className="form-control" rows="5" onChange={this.updateMyState('comments')}/>
            </div>
            <button type='submit' className='btn btn-success contact-button '>Submit</button>
          </form>
        </div> 
      </div>
  )}
  }
}

export default withRouter(Contact);
