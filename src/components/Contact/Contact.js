import React, { Component } from "react";
import "./Contact.css";

class Contact extends Component {
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
                  <form>
                    <div className="form-group my-2">
                      <label htmlFor="exampleInputEmail1">Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group my-2">
                      <label htmlFor="exampleInputEmail1">Email Address</label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
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
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="4"
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
