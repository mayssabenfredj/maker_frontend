import React from "react";

const GoogleMap = () => {
  return (
    <div
      className="map-container"
      style={{ width: "100%", maxWidth: "100%", height: "450px" }}
    >
      <iframe
        title="RBK Tunis Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d398.8541424785449!2d10.186686872761094!3d36.8943398373913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb32a574f131%3A0x736d6f5853a1bd2e!2sReBootKamp%20(RBK%20Tunis)!5e0!3m2!1sfr!2stn!4v1753303304398!5m2!1sfr!2stn"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
