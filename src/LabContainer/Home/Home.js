import React from "react";
import Profile from "./Profile/Profile";
import Video from "./Video/Video";
import Footer from "./Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container" id="Home">
      {/* <Header/> */}
      <Profile />
      <Footer />
    </div>
  );
}
