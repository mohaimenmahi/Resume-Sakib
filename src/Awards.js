import React, { Component } from 'react';

class Awards extends Component {
  render(){
    return(
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
          <div className="my-auto">
            <h2 className="mb-5">Awards &amp; Certifications</h2>
            <ul className="fa-ul mb-0">
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                Junior Board Scholership - General Grade</li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                SSC Board Scholarship - General Grade
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                HSC Board Scholarship - Telentpool
              </li>
              <li>
                <i className="fa-li fa fa-trophy text-warning"></i>
                Honor's Award - For obtaining CGPA of 3.76 From Islamic University of Technology, Gazipur, Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default Awards;
