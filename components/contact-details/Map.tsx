import React from "react";

const Map: React.FC = () => {
  return (
    <div className="relative w-full flex justify-center p-6">
      <iframe
        title="Google Maps"
        className="w-[1200px] h-[220px] rounded-lg shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3453.6217860664206!2d31.381392475390882!3d30.047706674921976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6207ae1f41b8392f%3A0xea05b7fbd5f93b9f!2sTactics%20Digital%20Agency!5e0!3m2!1sen!2seg!4v1728765179712!5m2!1sen!2seg"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
