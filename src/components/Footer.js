import React from "react";
import "../styles/Footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaShopify } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

export default function Footer(){
    return (
        <footer>
        <div className="social-container d-flex justify-content-center">
          <a
            href="https://www.instagram.com/diceworkspdx"
            className="social-link"
            target="_blank"
            rel="noreferrer"
            title="DiceworkPDX's Instagram"
            ><FaInstagram color="#62925f" size="7vmin" /></a>
          <a
            href="https://diceworkspdx.myshopify.com/"
            className="social-link"
            target="_blank"
            rel="noreferrer"
            title="DiceworksPDX Shop"
            ><FaShopify color="#62925f" size="7vmin"/></a>
          <a href="mailto:diceworkspdx@gmail.com" className="social-link" title="Send the DiceworksPDX team an Email"
            ><FaEnvelope color="#62925f" size="7vmin"/>
          </a>
        </div>
        <div className="source-code">
          <p className="">
          Copyright © 2023 DiceworksPDX
          <br />
            This website was coded by Casey Baker and is 
            <a
              className="source-code-link"
              href="https://github.com/cj-baker/diceworkspdx-react"
              target="_blank"
              rel="noreferrer"
              title="Go to the GitHub Repository for this Website"
              > Open Sourced</a>
          </p>
        </div>
    </footer>
    )
}