import React, { useEffect } from "react";

const AdBanner = () => {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense error:", err);
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-6">
      
      {/* Placeholder box */}
      <div className="w-full min-h-[100px] flex items-center justify-center">
        
        {/* AdSense */}
        <ins
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client="ca-pub-7876219071022210"
          data-ad-slot="5810055092"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />

      </div>

    </div>
  );
};

export default AdBanner;