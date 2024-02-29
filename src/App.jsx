import Layout from "./components/Layout";
import SideImage from "./components/SideImage";
import VideoPlayer from "./components/VideoPlayer";
function App() {
  return (
    <div className="flex space-x-5 justify-between w-screen h-screen bg-[#09090B] text-white">
      <SideImage />
      <Layout />
      {/* <VideoPlayer /> */}
    </div>
  );
}

export default App;
