import React from "react";
import "./practices.css";

export default function Practices() {
  return (
    <div className="practise-section bg-white" id="practices">
        <div className="container">
        <div className="practise-items">
          <h1 className="practise-heading text-blue">Our Main <br />Practices</h1>
          <div className="practise-boxes">
            <div className="practise-box box1">
              <h3 className="text-blue">General Counsel</h3>
              <p className="text-blue">What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.</p>
            </div>
            <div className="practise-box box2">
              <h3 className="text-blue">Civil Litigation</h3>
              <p className="text-blue">What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.</p>
            </div>
            <div className="practise-box box3">
              <h3 className="text-blue">Dispute Resolution</h3>
              <p className="text-blue">What's special about your services or offerings? Give your audience a reason to choose you over your competition. Cite it above, then flesh it out here.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
