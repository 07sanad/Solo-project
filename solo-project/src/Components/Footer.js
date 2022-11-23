import React from "react";

import Twitter from "../Assets/Twitter-logo.png"
import Email from "../Assets/facebook-logo.png"
import LinkedIn from "../Assets/instagram-logo.png"
import GitHub from "../Assets/Github-logo.png"

export default function Footer() {
  return (
    <footer className="footer-el">
      <img src={Twitter} alt="Twitter" className="" width={20} />
      <img src={Email} alt="Email" width={20} />
      <img src={LinkedIn} alt="LinkedIn" width={20} />
      <img src={GitHub} alt="GitHub" width={20} />
    </footer>
  );
}
