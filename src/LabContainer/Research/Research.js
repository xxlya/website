import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Research.css";

export default function Research(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTSANTS = [
    {
      title:
        "Federated Learning on Non-iid Features",
      description:
        "Most of the previous federated learning work has focused on a difference in the distribution of labels. Unlike those settings, we address an important problem of FL, e.g., different scanner/sensors in medical imaging, where local clients may store examples with different marginal or conditional feature distributions compared to other nodes, which we denote as feature shift non-iid. In this work, we propose an effective method that uses local batch normalization to alleviate the feature shift before averaging models.",
      imgurl: require("../../assets/Research/fedbn.png"),
    },
   {
      title:
        "Self-supervised Learning on Graph Data",
      description:
        "In population graph-based disease analysis, graph convolutional neural networks (GCNs) have achieved remarkable success. However, these achievements are inseparable from abundant labeled data and sensitive to spurious signals. To improve fMRI representation learning and classification under a label-efficient setting, we propose a novel and theory-driven self-supervised learning (SSL) framework on GCNs, called GATE. In this work, we focus on the challenging task, neuro-disease classification, using fMRI and esign suitable and effective SSL strategies to extract formation and robust features for fMRI.",
      imgurl: require("../../assets/Research/gate.png"),
    },
    {
      title: "Data-free Incremental Learning",
      description: 
      "A major challenge of incremental learning is catastrophic forgetting. To alleviate this problem, prior methodologies save a portion of training data that require perpetual storage, which may introduce privacy issues. Here, we propose a novel data-free class incremental learning framework that first synthesizes data from the model trained on previous classes to generate synthetic data, called Class Impression, which is used to update model with new data. With the assistance with serveral novel losses, our pipeline improves accuracy for class incremental learning.",
      imgurl: require("../../assets/Research/class_impression.png"),
    },
        {
      title: "Unsupervised Data Valuation",
      description: 
      "Existing data assessment methods commonly require knowing the labels in advance, which are not feasible to achieve the goal of `knowing which data is valuable beofre training.'To this end, we formulate and propose a novel and efficient data assessment strategy, EXponentiAl Marginal sINgular valuE (EXAMINE) score, to rank the quality of unlabeled medical image data based on their useful latent representations extracted via SSL networks. Our method is designbed with proper theoritical gaurantee.",
      imgurl: require("../../assets/Research/examine.png"),
    },
  ];

  const renderProjects = () => {
    return SCREEN_CONSTSANTS.map((value, i) => (
      <div className="research-projects">
        <div className="project-title" key={i}>
          <span>{value.title}</span>
          <img
            src={value.imgurl}
            alt="No Image"
            className="project-image"
          ></img>
        </div>
        <div className="project-details">
          <span>{value.description}</span>
        </div>
        <div className="bottom-bar"></div>
      </div>
    ));
  };

  return (
    <div className="research-container screen-container" id={props.id || ""}>
      <div className="research-parent">
        <ScreenHeading title={"Research"} subHeading={""} />
        {renderProjects()}
      </div>
    </div>
  );
}
