import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div classNameName="Contact">
      <form style={{ marginTop: "56px" }}>
        <div className="container">
          <div className="row single-form g-0" style={{ padding: "50px" }}>
            <div className="col-sm-12 col-lg-6">
              <div className="left">
                <h2>
                  <span>Contact Us for</span> <br />
                  Business Enquies
                </h2>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="right">
                <i className="fa fa-caret-left"></i>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Message
                    </label>
                    <textarea
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    ></textarea>
                  </div>
                  <button className="btn btn-lg btn-outline-dark">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
