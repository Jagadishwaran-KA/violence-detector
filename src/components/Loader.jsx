import React, { useEffect, useState } from "react";
import { Progress } from "../components/ui/progress";

function Loader() {
  const [val, setVal] = useState(0);

  useEffect(() => {
    return async () => {
      for (let index = 0; index <= 150; index += 15) {
        await new Promise((r) => setTimeout(r, 1500));
        if (index > 100) {
          setVal(100);
          break;
        }
        setVal(index);
      }
    };
  }, []);

  return (
    <div className="w-screen h-screen space-y-3 flex flex-col justify-center items-center align-middle">
      <h1>Processing Video</h1>
      <Progress value={val} className="w-[30%]" />
    </div>
  );
}

export default Loader;
