import React, { useEffect } from "react";

const AdBanner = () => {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
     style={{ display: "block" }}
      data-ad-client="ca-pub-7876219071022210"
      data-ad-slot="5810055092"
      data-ad-format="auto"
      data-full-width-responsive="true"
   
    />
  );
};

export default AdBanner;