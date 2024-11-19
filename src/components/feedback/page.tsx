import React from "react";
import Fstyle from "./feedback.module.css";

export default function Feedback() {
  return (
    <div className={Fstyle.feedbacksection} id="feedback">
      <div className={Fstyle.container}>
        <div className={Fstyle.feedbacktext}>
          <h1 className={Fstyle.feedheading}>Feedback from Clients</h1>
          <p className={Fstyle.feedtext}>Why you should hire our firm.</p>
          <div className={Fstyle.boxes}>
            <div className={`${Fstyle.box} ${Fstyle.box11}`}>
              <p className={Fstyle.boxtext}>
                Your service consistently exceeds expectations, delivering
                remarkable quality and reliability. Client satisfaction is
                guaranteed with every interaction.
              </p>
              <h3 className={Fstyle.NameText}>-Umair Jami</h3>
            </div>
            <div className={`${Fstyle.box} ${Fstyle.box21}`}>
              <p className={Fstyle.boxtext}>
                Impressive attention to detail and professionalism make your
                firm stand out. Highly recommended for anyone seeking
                trustworthy and efficient solutions.{" "}
              </p>
              <h3 className={Fstyle.NameText}>-Sarah Ahmed</h3>
            </div>
            <div className={`${Fstyle.box} ${Fstyle.box31}`}>
              <p className={Fstyle.boxtext}>
                Exceptional expertise combined with personalized care ensures
                outstanding results. Working with your team has been an absolute
                pleasure.
              </p>
              <h3 className={Fstyle.NameText}>-Ali Khan</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
