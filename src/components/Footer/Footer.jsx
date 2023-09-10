import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import { FaYoutube } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        
        <span>maheshmankar03@gmail.com</span>
        <div className="f-icons">
          <a
            rel="noopener noreferrer"
            href="https://www.instagram.com/mahesh_patil_2.0"
            target="_blank"
          >
            <Insta color="white" size={"3rem"} />
          </a>

          <div>
            <a
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCG_fZavdVl_p-9SV1Uklsbg"
              target="_blank"
            >
              <FaYoutube className="icons" size={"3rem"} color="white" />
            </a>
          </div>

          <div>
            <a
              rel="noopener noreferrer"
              href="https://www.facebook.com/maheshpatil.mankar"
              target="_blank"
            >
              <Facebook color="white" size={"3rem"} />
            </a>
          </div>
          <a
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mahesh-mankar-044772238"
            target="_blank"
          >
            <AiOutlineLinkedin color="white" size={"3rem"} />
          </a>
          <div>
            <a
              rel="noopener noreferrer"
              href="https://github.com/Mahesh0175"
              target="_blank"
            >
              <Gitub color="white" size={"3rem"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
