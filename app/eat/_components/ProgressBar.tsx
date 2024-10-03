import React from "react";

export default function ProgressBar({ progress }: { progress: number }) {
  console.log(progress);
  return (
    <div className="h-1 w-full rounded-md bg-gray">
      <div
        className={`h-1 transition-all duration-1000 rounded-md`}
        style={{
          width: `${progress}%`,
          backgroundColor: progress <= 50 ? "#fecc07" : "#02a34c",
        }}
      ></div>
    </div>
  );
}
