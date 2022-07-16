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
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Chun-Yin Huang",
      title: "PhD (2021 - )",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Wenlong Deng",
      title: "PhD (2022 - ), co-supervised with Dr. Christos Thrampoulidis at UBC ECE",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Minghui Chen",
      title: "PhD (2022 - ), co-supervised with Dr. Zehua Wang at UBC ECE",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Sana Ayromlou",
      title: "MSc (2021 - ), co-supervised with Dr. Purang Abolmaesum at UBC ECE",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
     {
      name: "Beidi Zhao",
      title: "MSc (2022 -), co-supervised with Dr. Gang Wang at UBC Medicine",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Justin Yang",
      title: "MSc (2022 -), co-supervised with Dr. Mi Jung Park at UBC CS",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Ailar Mahdizadeh",
      title: "MSc (2022 -), co-supervised with Dr. Martin Mckweon at UBC Medicine",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Ruinan Jin",
      title: "UG",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Juntai Cao",
      title: "UG",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
    {
      name: "Nan Wang",
      title: "Visiting Student",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
        {
      name: "Jee Seok Yoon",
      title: "Visiting Student",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
    },
      {
      name: "Fatemeh Taheri Dezaki",
      title: "Postdoc, co-supervised with Dr. Purang Abolmaesum at UBC ECE, now at Amazon ",
      link: "www.google.com",
      imgurl: require("../../assets/Home/xiaoxiao.jpg"),
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
