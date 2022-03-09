import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      msg: "",
    };

    this.contactSubmit = this.contactSubmit.bind(this);
    this.contactOnChange = this.contactOnChange.bind(this);
  }

  contactSubmit = (event) => {
    event.preventDefault();
    alert(
      `Hello: ${this.state.fullName} your email is ${this.state.email} your msg is ${this.state.msg} `
    );

    this.setState({
      fullName: "",
      email: "",
      msg: "",
    })
  };

  contactOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="mb-3">
                <h1 className="contact-head p-1">Contact Us</h1>
              </div>
              <div className="card px-4">
                <div className="card-body">
                  <form onSubmit={this.contactSubmit}>
                    <div className="form-group my-2">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input
                        name="fullName"
                        type="text"
                        className="form-control"
                        placeholder="Enter your full name"
                        value={this.state.fullName}
                        onChange={(event) => {
                          this.contactOnChange(event);
                        }}
                      />
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="exampleInputEmail1">Email Address</label>
                      <input
                        name="email"
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={this.state.email}
                        onChange={(event) => {
                          this.contactOnChange(event);
                        }}
                      />
                      <small id="emailHelp" className="form-text text-muted">
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="exampleFormControlTextarea1">
                        Send Your Message
                      </label>
                      <textarea
                        name="msg"
                        className="form-control"
                        rows="5"
                        value={this.state.msg}
                        onChange={(event) => {
                          this.contactOnChange(event);
                        }}
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary my-3">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
