import React from "react";
import "../Styles/offline.css";
import Ghost from "./offline-removebg-preview.png";
const Offline = () => {
  return (
    <div className="offlineContainer">
      <p className="poop">💩</p>
      <p className="offlineFont">Looks like you're Offline</p>
      <p className="offlineFont">Please check your internet Connection</p>
    </div>
  );
};

export default Offline;
