import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-picture"></div>
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              {/* Here to add media api link*/}
              {/* <a href="#">
                <i className="fa fa-twitter"></i>
              </a> */}
            </div>
            {/* need to implement some media api? */}
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
  
                    "Trusted AI",
                    2000,
                    "Efficient AI",
                    2000,
                    "Healthcare",
                    2000,
                  ]}
                />
              </h1>
              <div className="profile-details-name">
                {/* <span className="primary-text">
                  About
                </span> */}
              </div>
               <span className="profile-role-tagline">
                Welcome to the Trusted and Efficient AI (TEA) lab at UBC! <br /> <br />
                
                 Our research aims to improve the explainability, fairness, privacy, and efficiency of AI models. We are developing machine learning algorithms and systems based on those principles and aspirations, then translating them into realworld applications, such as healthcare filds.  </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
