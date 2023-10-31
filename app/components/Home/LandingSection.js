"use client";
import React from "react";
import Typewriter from "typewriter-effect";

const LandingSection = () => {
  return (
    <section
      className="text-center d-flex align-items-center justify-content-center"
      style={{ flexGrow: 1 }}
    >
      <div className="display-1">
        <Typewriter
          options={{
            strings: ["The World's Largest", "Events Library"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
    </section>
  );
};

export default LandingSection;
