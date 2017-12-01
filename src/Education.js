import React, { Component } from 'react';

class Education extends Component {
  render(){
    return(
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
          <div className="my-auto">
            <h2 className="mb-5">Education</h2>
            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Islamic University of Technology</h3>
                <div className="subheading mb-3">Bachelor of Engineering</div>
                <div>Electrical & Electronic Engineering</div>
                <p>GPA: 3.76</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">January 2014 - November 2017</span>
              </div>
            </div>

            <div className="resume-item d-flex flex-column flex-md-row">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Chittagong College</h3>
                <div className="subheading mb-3">Higher Secondary School Certificate</div>
                <p>GPA: 5.00</p>
              </div>
              <div className="resume-date text-md-right">
                <span className="text-primary">January 2005 - February 2011</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Education;
