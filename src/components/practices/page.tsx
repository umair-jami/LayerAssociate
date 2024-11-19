import React from "react";
import styles from "./practices.module.css";

export default function Practices() {
  return (
    <div className={styles.practisesection} id="practices">
      <div className={styles.container}>
        <div className={styles.practiseitems}>
          <h1 className={styles.practiseheading}>
            Our Main <br />
            Practices
          </h1>
          <div className={styles.practiseboxes}>
            <div className={`${styles.practisebox} ${styles.box1}`}>
              <h3 className={styles.text}>General Counsel</h3>
              <p className={styles.text}>
              Providing expert legal guidance tailored to your business needs. Offering unparalleled dedication and strategic solutions.
              </p>
            </div>
            <div className={`${styles.practisebox} ${styles.box2}`}>
              <h3 className={styles.text}>Civil Litigation</h3>
              <p className={styles.text}>
              Representing you effectively in court with meticulous preparation. Fighting passionately to protect your interests every step.
              </p>
            </div>
            <div className={`${styles.practisebox} ${styles.box3}`}>
              <h3 className={styles.text}>Dispute Resolution</h3>
              <p className={styles.text}>
              Resolving conflicts efficiently while preserving relationships. Delivering practical, fair outcomes through expert negotiation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
