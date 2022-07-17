import React from "react";
import "./Video.css"

export default function Video() {
    return (
        <div className="vi-parent">
            <div class="row">
                <div class="column">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/ukzFI9rgwfU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="column">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/7dLK5Gh_AAU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
                </div>
            </div>
        </div>
    )
}