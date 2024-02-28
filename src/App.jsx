import Layout from "./components/Layout";
import SideImage from "./components/SideImage";
function App() {
  return (
    <div className="flex space-x-5 justify-between bg-black text-white">
      <SideImage />
      <Layout />
    </div>
  );
}

export default App;
