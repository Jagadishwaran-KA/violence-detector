import React from "react";
import ReactPlayer from "react-player";
import violence from "../assets/4.png";
function VideoPlayer({ filePath }) {
  return (
    <div className="overflow-hidden">
      <div className="flex">
        <div className="">
          <div className="flex justify-center items-center flex-col p-6 cursor-pointer">
            <div className="flex m-8 space-x-2">
              <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl">
                Sentinel Shield
              </h1>
              <svg
                className="w-12 object-contain"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
              >
                <path fill="#292929" d="M0 0h128v128H0z" />
                <path
                  stroke="#fff"
                  stroke-width="4.85312"
                  d="M5.762 5.762h116.476v116.476H5.762zm0 0"
                />
                <path
                  fill="#fff"
                  d="M75.07 95.09H56.113v18.957H75.07v-3.79H59.906v-3.792h7.43v-3.793h-7.43v-3.79H75.07zm22.598 0H78.863v18.957h18.805v-3.79H82.504V98.884h15.164zm22.14 0h-18.195v3.793h7.582v15.164h3.79V98.883h6.824zm-86.593 0v18.957h3.789V98.883h11.375v7.582h3.793V95.09zm0 0"
                />
                <path
                  fill="#fff"
                  d="M48.379 102.672H37.004v3.793h7.582v3.793h3.793zm3.793 7.586h-3.793v3.789h3.793zm0 0"
                />
              </svg>
            </div>
            <div className="mt-10">
              <ReactPlayer
                url={filePath}
                controls={true}
                width={800}
                height={400}
              />
            </div>
          </div>
        </div>
        <div className="mt-12 ml-14">
          <h1 className="font-medium text-2xl ml-4">Output</h1>
          <img
            className="mt-5 mr-10 object-contain w-[90%] h-[90%]"
            src={violence}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
