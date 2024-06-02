import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full w-full max-w-[2000px] mx-auto px-2  lg:px-24 ">
      {children}
    </div>
  );
};

export default Container;
