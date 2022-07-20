import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./People.css";

export default function People(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const people = [
    {
      name: "Dr. Xiaoxiao Li",
      title: "PI",
      link: "https://xxlya.github.io/xiaoxiao/",
      imgurl: require("../../assets/portrait/pokemon0.png"),
    },
    {
      name: "Chun-Yin Huang",
      title: "PhD (2021 - )",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon1.png"),
    },
    {
      name: "Wenlong Deng",
      title: "PhD (2022 - ), co-supervised with Dr. Christos Thrampoulidis at UBC ECE",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon2.png"),
    },
    {
      name: "Minghui Chen",
      title: "PhD (2022 - ), co-supervised with Dr. Zehua Wang at UBC ECE",
      link: "https://chenminghui.com/",
      imgurl: require("../../assets/portrait/pokemon3.png"),
    },
    {
      name: "Sana Ayromlou",
      title: "MSc (2021 - ), co-supervised with Dr. Purang Abolmaesum at UBC ECE",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon4.png"),
    },
     {
      name: "Beidi Zhao",
      title: "MSc (2022 -), co-supervised with Dr. Gang Wang at UBC Medicine",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon5.png"),
    },
    {
      name: "Justin Yang",
      title: "MSc (2022 -), co-supervised with Dr. Mi Jung Park at UBC CS",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon6.png"),
    },
    {
      name: "Ailar Mahdizadeh",
      title: "MSc (2022 -), co-supervised with Dr. Martin Mckweon at UBC Medicine",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon7.png"),
    },
    {
      name: "Ruinan Jin",
      title: "UG",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon8.png"),
    },
    {
      name: "Juntai Cao",
      title: "UG",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon9.png"),
    },
      {
      name: "Fatemeh Taheri Dezaki",
      title: "Postdoc, now at Amazon ",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon12.png"),
    },
    {
      name: "Nan Wang",
      title: "Visiting Student",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon10.png"),
    },
        {
      name: "Jee Seok Yoon",
      title: "Visiting Student",
      link: "www.google.com",
      imgurl: require("../../assets/portrait/pokemon11.png"), 
    },
  ];

  // const renderPeople = () => {
  //   return (
  //     <ul>
  //       {people.map((data) => (
  //         <li className="people-content" key={data.id}>
  //           <a href={data.link}>{data.name}</a>
  //           <br />
  //           <img
  //             src={data.imgurl}
  //             alt="No Image"
  //             width="100"
  //             height="120"
  //           ></img>
  //           <p className="people-title">{data.title}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   );
  // };

  const renderPeople = () => {
    return (
      <ul>
        {people.map((data) => (
          <div class="responsive">
          <div class="gallery">
            <a target="_blank" href="img_forest.jpg">
              <img src={data.imgurl} alt="Forest" width="600" height="400" />
            </a>
            <a class="desc" href={data.link}>{data.name}</a>
            <div class="desc">{data.title}</div>
          </div>
        </div>
        ))}
      </ul>
    );
  };

  return (
    <div className="people-container screen-container" id={props.id || ""}>
      <div className="people-parent">
        <ScreenHeading title={"People"} subHeading={""} />
      </div>
      <div className="gallery">{renderPeople()}</div>
      <div class="clearfix"></div>
    </div>
  );
  
  // return (
  //   <div>
  //     <div className="people-parent">
  //       <ScreenHeading title={"People"} subHeading={""} />
  //     </div>

  //     <div class="responsive">
  //       <div class="gallery">
  //         <a target="_blank" href="img_5terre.jpg">
  //           <img
  //             src="img_5terre.jpg"
  //             alt="Cinque Terre"
  //             width="600"
  //             height="400"
  //           />
  //         </a>
  //         <div class="desc">Add a description of the image here</div>
  //       </div>
  //     </div>

  //     <div class="responsive">
  //       <div class="gallery">
  //         <a target="_blank" href="img_forest.jpg">
  //           <img src="img_forest.jpg" alt="Forest" width="600" height="400" />
  //         </a>
  //         <div class="desc">Add a description of the image here</div>
  //       </div>
  //     </div>

  //     <div class="responsive">
  //       <div class="gallery">
  //         <a target="_blank" href="img_lights.jpg">
  //           <img
  //             src="img_lights.jpg"
  //             alt="Northern Lights"
  //             width="600"
  //             height="400"
  //           />
  //         </a>
  //         <div class="desc">Add a description of the image here</div>
  //       </div>
  //     </div>

  //     <div class="responsive">
  //       <div class="gallery">
  //         <a target="_blank" href="img_mountains.jpg">
  //           <img
  //             src="img_mountains.jpg"
  //             alt="Mountains"
  //             width="600"
  //             height="400"
  //           />
  //         </a>
  //         <div class="desc">Add a description of the image here</div>
  //       </div>
  //     </div>

  //     <div class="clearfix"></div>
  //   </div>
  // );
}
