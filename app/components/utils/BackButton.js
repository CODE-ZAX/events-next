"use-client";
import Link from "next/link";
import React from "react";

const BackButton = ({ href }) => {
  return (
    <div
      className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
      style={{ borderRadius: "50%", height: "50px", width: "50px" }}
    >
      <Link href={href}>
        <img
          width="30"
          height="30"
          src="https://img.icons8.com/ios-filled/50/back.png"
          alt="back"
        />
      </Link>
    </div>
  );
};

export default BackButton;
