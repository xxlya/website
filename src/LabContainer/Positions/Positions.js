import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Positions.css";

export default function News(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // const news = [
  //   {
  //     title:
  //       "If you want to join TEA, please email to xiaoxiao.li@ece.ubc.ca, including your CV, transcript, and one of your research papers if applicable. Due to the large amount of emails I receive, I may not be able to respond to each one individually. To help me notice you email, please put **[ILOLLEH]**, written backwards, in your email subject. Please strictly follow the instruction.",
  //   },
  //   {
  //     title:
  //       "Graduate Students: Multiple positions for graduate students are available for 2023.",
  //   },
  //   {
  //     title:
  //       "Intern Students and Visiting Students/Scholars: All formats of local and remote collaboration are welcomed. For the intern students at UBC, we need to work together through course registration or summer internship programs",
  //   },

  // ];

  // const renderNews = () => {
  //   return (
  //     <ul>
  //       {news.map((data) => (
  //         <li className="news">
  //           {data.title}</li>
  //       ))}
  //     </ul>
  //   );
  // };
  return (
    <div className="news-container screen-container" id={props.id || ""}>
      <div className="news-parent">
        <ScreenHeading title={"Positions"} subHeading={""} />
        <div className="forward">
        If you want to join TEA, please email to <a href="mailto:xiaoxiao.li@ece.ubc.ca">xiaoxiao.li@ece.ubc.ca</a>, including your CV, transcript, and one of your research papers if applicable. Due to the large amount of emails I receive, I may not be able to respond to each one individually. To help me notice you email, please put **[ILOLLEH]**, written backwards, in your email subject. Please strictly follow the instruction.
        </div>
        <div className="content">
        <li><strong> Graduate Students</strong>: Multiple positions for graduate students are available for 2023.</li>
        <li><strong>Intern Students and Visiting Students/Scholars</strong>: All formats of local and remote collaboration are welcomed. For the intern students at UBC, we need to work together through course registration or summer internship programs.</li>
        </div>
      </div>
    </div>
  );
}
