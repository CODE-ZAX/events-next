import React from "react";
import MainNavbar from "./components/utils/Navbar";
import LandingSection from "./components/Home/LandingSection";

const HomePage = () => {
  return (
    <div className="d-flex flex-column" style={{ height: "100vh" }}>
      <MainNavbar />
      <LandingSection />
      <footer className="text-center p-2 text-secondary text-sm">
        ❤️Designed and Developed by Mian Muhammad Faraz
      </footer>
    </div>
  );
};

export default HomePage;
