import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Publications.css";

export default function Publications(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const publications = [
      {
      title:
        "Class Impression for Data-free Incremental Learning",
      author: "Ayromlou, S., Abolmaesumi, P., Tsang, T., & Li, X. ,",
      journal: "MICCAI 2022",
      link: "https://arxiv.org/pdf/2207.00005.pdf",
    },
     {
      title:
        "Exploring Resolution and Degradation Clues as Self-supervised Siganl for Low Quality Object Detection",
      author: "Cui, Z., Zhu, Y., Gu, L., Qi, G., Li, X., Zhang, R., Zhang, Z., & Harada, T.",
      journal: "ECCV 2022",

    },
    {
      title:
        "FedNI  Federated Graph Learning with Network Inpainting for Population Based Disease Prediction",
      author: "Peng, L., Wang, N., Dvornek, N., Zhu, X., & Li, X.,",
      journal: "IEEE Transaction on Medical Imaging 2022",
      link: "https://arxiv.org/pdf/2112.10166.pdf",
    },
        {
      title:
        "Unsupervised Federated Learning is Possible: A Case of Class-Conditional-Sharing Clients",
      author: "Lu, N., Wang, Z., Li, X., Niu, G., Dou, Q., & Sugiyama, M.,",
      journal: "ICLR 2022",
      link: "https://openreview.net/pdf?id=WHA8009laxu",
    },
    {
      title:
        "Evaluating Explainable AI on a Multi-Modal Medical Imaging Task: Can Existing Algorithms Fulfill Clinical Requirements",
      author: "Jin, W., Li, X., & Hamarneh G",
      journal: "AAAI 2022",
      link: "https://www2.cs.sfu.ca/~hamarneh/ecopy/aaai2022.pdf",
    },
          {
      title:
        "Leveraging Human Selective Attention for Medical Image Analysis with Limited Training Data.",
      author: "Huang, Y., Li, X., Yang, L., Gu, L., Zhu, Y., Seo, H., Meng, Q., Harada, T. & Sato, Y.",
      journal: "BMVC 2021",
      link: "https://openreview.net/pdf?id=WHA8009laxu",
    },
              {
      title:
        "EMA: Auditing Data Removal from Trained Models.",
      author: "Huang, Y., Li, X., & Li, K.",
      journal: "MICCAI 2021",
      link: "https://arxiv.org/pdf/2109.03675.pdf",
    },
              {
      title:
        "Subgraph Federated Learning with Missing Neighbor Generation",
      author: "Zhang, K., Yang, C., Li, X., Sun, L., & Yiu, SM.",
      journal: "NeurIPS 2021 (spotlight)",
      link: "https://arxiv.org/pdf/2106.13430.pdf",
    },
                  {
      title:
        "FL-NTK: A Neural Tangent Kernel-based Framework for Federated Learning Analysis.",
      author: "Huang, B., Li, X., Song, Z., & Yang, X.",
      journal: "ICML 2021",
      link: "https://arxiv.org/abs/2105.05001 ",
    },
                      {
      title:
        "FedBN: Federated Learning on Non-IID Features via Local Batch Normalization.",
      author: "Li, X., Jiang, M., Zhang, X., Kamp, M., & Dou, Q.",
      journal: "ICLR 2021",
      link: "https://openreview.net/pdf?id=6YEQUn0QICG",
    },
          { title:
        "On InstaHide, Phase Retrieval, and Sparse Matrix Factorization.",
      author: "Chen, S., Li, X., Song, Z., & Zhuo, D.",
      journal: "ICLR 2021",
      link: "https://openreview.net/pdf?id=AhElGnhU2BV",
    },
    { title:
        "BrainGNN: Interpretable Brain Graph Neural Network for fmri Analysis..",
      author: "Li, X., Zhou, Y., Dvornek, N., Zhang, M., Gao, S., Zhuang, J., ... & Duncan, J. S.",
      journal: "Medical Image Analysis 2021",
      link: "https://www.sciencedirect.com/science/article/abs/pii/S1361841521002784",
    },

  ];

  const renderPublications = () => {
    return (
      <ul>
        {publications.map((data) => (
          <li className="publication-content" key={data.id}>
            <a className="publication-title" href={data.link}>
              {data.title}
            </a>
            <p className="publication-autors">{data.author}</p>
            <p className="publication-journal">{data.journal}</p>
          </li>
        ))}
      </ul>
    );
  };

  // const renderPublications = () => {
  //   return publications.map((value, i) => (
  //     <div className="publications">
  //       <div className="project-title" key={i}>
  //         <strong>{value.title}</strong>
  //         <br className="project-image"> {value.author}</br>
  //       </div>

  //     </div>
  //   ));
  // };

  return (
    <div
      className="publications-container screen-container"
      id={props.id || ""}
    >
      <div className="publications-parent">
        <ScreenHeading title={"Publications"} subHeading={""} />
        <div className="publication-introduction">
          <p>
            For the complete list, please check &nbsp;
            <a href="https://scholar.google.com/citations?user=sdENOQ4AAAAJ&hl=en#">
              google scholar
            </a>
            .
          </p>
        </div>
        {renderPublications()}
      </div>
    </div>
  );
}
