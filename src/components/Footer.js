import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer(){
    return (
        <div>
        <div className="social-container d-flex justify-content-center">
          <a
            href="https://github.com/cj-baker"
            target="_blank"
            rel="noreferrer"
            title="Casey's GitHub Profile"
            ><FaInstagram/></a>
          <a
            href="https://diceworkspdx.shopify.com"
            target="_blank"
            rel="noreferrer"
            title="DiceworksPDX Shop"
            ><FaShopify/></a>
          <a href="mailto:diceworkspdx@gmail.com" title="Send the Diceworks Team and Email"
            ><FaEnvelope/>
          </a>
        </div>
        <div className="source-code">
          <p className="">
            This website was coded by Casey Baker and is
            <a
              className="source-code-link"
              href="https://github.com/cj-baker/Portfolio"
              target="_blank"
              rel="noreferrer"
              title="Go to the GitHub Repository for this Website"
              >Open Sourced</a>
          </p>
        </div>
    </div>
    )
}