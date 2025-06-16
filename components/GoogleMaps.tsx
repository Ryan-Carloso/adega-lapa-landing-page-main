import React from "react";

const GoogleMaps: React.FC = () => {
  return (
    <section id="Maps" className="relative bg-muted py-6 md:py-9">
    <div className="container px-4 sm:px-6">

    <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7818.655847158069!2d-8.613647255857021!3d41.154723435854464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd246586d3add73f%3A0x4eeb51dc118d0b55!2sAdega%20da%20lapa!5e0!3m2!1sen!2spt!4v1741719702414!5m2!1sen!2spt" 
  width="100%" 
  height="100%" 
  style={{border:0}} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
/>
    </div>
          
    </div>
  </section>
      );
};

export default GoogleMaps;
