import React, { Component } from 'react';

class Experience extends Component {
  render(){
    return(
      <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
          <div className="my-auto">
            <h2 className="mb-5">Experience</h2>

            <div className="resume-item d-flex flex-column flex-md-row mb-5">
              <div className="resume-content mr-auto">
                <h3 className="mb-0">Head of Internal Affairs </h3>
                <div className="subheading mb-3">IUT Photographic Society - IUTPS</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Experience;
