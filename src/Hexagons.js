import React from "react";
import "./Hexagons.css";

export default function MainMenu() {
    return (
        <div class="hexGrid">
        <div class="hexContainer">
          <div class="hex first">
            <div className="shape"></div>
            <a href="./about"><div className="shape-overlay">
              About Us
            </div></a>
          </div>
          <div class="hex second"><div className="shape"></div>
            <a href="./work"><div className="shape-overlay">
              Our Work
            </div></a></div>
          <div class="hex third"><div className="shape"></div>
            <a href="./shop"><div className="shape-overlay">
              Shop Dice
            </div></a></div>
          <div class="hex fourth"><div className="shape"></div>
            <a href="./contact"><div className="shape-overlay">
             Contact Us
            </div></a></div>
        </div>
      </div>
    )}