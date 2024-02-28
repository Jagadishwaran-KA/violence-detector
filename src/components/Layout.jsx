import React from "react";
import VideoComponent from "./VideoComponent";
import Footer from "./Footer";
import Hero from "./Hero";

function Layout() {
  return (
    <div>
      <Hero />
      <div>
        <p className="w-4/5 mt-2 text-gray-300">
          Empowering Safe Content: Upload and Ensure Violence-Free Videos with
          our AI-Powered Detection System.
        </p>
        <VideoComponent />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
