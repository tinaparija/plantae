import React, { Component } from 'react';
import { Switch, Route, withRouter} from 'react-router-dom';


class Order extends Component {
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
      form_submmitted: '', 
      zip_error: '', 
    }
    this.updateMyState = this.updateMyState.bind(this);
    this.postForm = this.postForm.bind(this);
    this.checkZipCode = this.checkZipCode.bind(this);
  }

  updateMyState(stateKey) {
    return (e) => {
        this.setState({
            [stateKey]: e.target.value
        })
    }
  }

  checkZipCode(zipcode){
    let zip = this.state.zipcode;
    let zip_trim = zip.trim(); 
    let valid_codes = ["94151","94159","94158","94102","94104","94103","94105","94188","94108","94177","94107","94110","94109","94112","94111","94115","94114","94117","94116","94118","94121","94123","94122","94124","94127","94126","94129","94131","94133","94132","94134","94139","94143"]
    if (valid_codes.includes(zip_trim)){
      return true; 
    } else{
      return false; 
    }
  }


  postForm(e){
    e.preventDefault();
    let validated_zip = this.checkZipCode()
    if (validated_zip) {
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
        return res.json()
    }).then((json) => {
        this.setState({
          form_submitted: "yes"
      })
    });
    } else {
      this.setState({
        zip_error: "yes"
      })
    }

  }

  render() {
    this.checkZipCode()
    if (!this.state.form_submitted){
      return (
      <div className = "contact-container">
        <div className ="form-container col-sm-6 offset-sm-3">
          <div className ="col-sm-12 contact-box">
          <h3>Order Request</h3> 
          <p className="col-sm-8 offset-sm-2">Please fill out the form below and we will coordinate a delivery with you shortly. Delivery fees are included in the list price -- we will take cash or credit payment upon delivering.</p>
          </div> 
          <form className = "col-sm-8 offset-sm-2 order-form" onSubmit={this.postForm}>
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
              <small id="zip-error" style={this.state.zip_error == 'yes' ? {} : {display: 'none'}}>
                    Please enter a zip code within San Francisco. 
              </small><br/> 
              <label htmlFor="zipcode">Zip Code</label>
              <input type="text" className="form-control input-sm" required onChange={this.updateMyState('zipcode')}/>
              <small className="text-muted">
                  We currently deliver within the 7x7 sq. miles that make up San Francisco.
              </small>
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
              <textarea type="text" className="form-control" rows="5" placeholder="Tell us your dreams and discount codes." onChange={this.updateMyState('comments')}/>
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
          <h6 className="col-sm-8 offset-sm-2">Thanks for reaching out! We'll be back to you in the next couple days.</h6>
          </div> 
          <form className = "col-sm-8 offset-sm-2">
            <div className="form-group thanks-container">
            </div>
          </form>
        </div> 
      </div>
  )}
  }
}

export default withRouter(Order);
