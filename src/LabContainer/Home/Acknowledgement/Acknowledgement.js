import React from "react";
import "./Acknowledgement.css"

export default function Acknowledgement() {
    return (
        <div className="ack-parent">
            <div className="ack-title">Acknowledgement</div>
            <div class="row">
                <div class="column">
                    <img src={require("../../../assets/Home/nvidia.png")} width="200" height="100" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/nvidia.png")} width="200" height="100" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/nvidia.png")} width="200" height="100" />
                </div>
                <div class="column">
                    <img src={require("../../../assets/Home/nvidia.png")} width="200" height="100" />
                </div>
            </div>
        </div>
    )
}