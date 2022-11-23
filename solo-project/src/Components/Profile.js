import React from "react";
import User from "../Assets/user.jpeg"

export default function Profile() {
  return (
    <div className="profile-el">
      <img src={User} alt="user" className="profile-foto" width={285} />
      <h2 className="name">Ataba Sanad</h2>
      <h3 className="job">Frontend Developer</h3>
      <h4 className="address">
        <small>www.ataba.io</small>
      </h4>
      <div className="button">
        <button className="email">Email</button>
        <button className="linkedin">LinkedIn</button>
      </div>
    </div>
  ); 
}