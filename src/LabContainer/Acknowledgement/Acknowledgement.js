import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Acknowledgement.css"

export default function Acknowledgement(props) {
    return (
        <div className="ack-parent" id={props.id || ""}>
            <ScreenHeading title={"Acknowledgement"} subHeading={""} />
            <div class="row">
                <div class="column">
                    <img src={require("../../assets/Home/nserc.png")} width="100" height="45" />
                </div>
                <div class="column">
                    <img src={require("../../assets/Home/compute_canada.png")} width="100" height="55" />
                </div>
                <div class="column">
                    <img src={require("../../assets/Home/cifar.png")} width="50" height="50" />
                </div>
                <div class="column">
                    <img src={require("../../assets/Home/nvidia.png")} width="110" height="50" />
                </div>
                <div class="column">
                    <img src={require("../../assets/Home/roche.png")} width="50" height="55" />
                </div>
                <div class="column">
                    <img src={require("../../assets/Home/azure.png")} width="100" height="50" />
                </div>
                <div class="column">
                    <img src={require("../../assets/Home/meta.png")} width="100" height="50" />
                </div>

            </div>
        </div>
    )
}