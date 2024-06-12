import React from "react";
import "../styles/Hexagons.css";

export default function Hexagons() {
    return (
        <div className="hexGrid">
        <div className="hexContainer">
          <div className="hex first">
            <div className="shape"></div>
            <a href="./about"><div className="shape-overlay">
              About Us
            </div></a>
          </div>
          <div className="hex second"><div className="shape"></div>
            <a href="./work"><div className="shape-overlay">
              Our Work
            </div></a></div>
          <div className="hex third"><div className="shape"></div>
            <a href="https://diceworkspdx.myshopify.com/" rel="noopener noreferrer"><div className="shape-overlay">
              Shop Dice
            </div></a></div>
          <div className="hex fourth"><div className="shape"></div>
            <a href="./contact"><div className="shape-overlay">
             Contact Us
            </div></a></div>
        </div>
      </div>
    )}