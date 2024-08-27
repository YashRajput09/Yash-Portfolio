import React from "react";

function HeroBtn({title, icon}) {
  return (
    <>
      <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-lg border border-slate-800 bg-[linear-gradient(110deg,#000319,45%,#1e2631,55%,#000319)] bg-[length:200%_100%] px-6 font-medium text-sm text-slate-100 transition-colors gap-2">
        {title}
        {icon}
      </button>
    </>
  );
}

export default HeroBtn;

