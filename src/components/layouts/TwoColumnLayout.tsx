import React from "react";
import Footer from "../common/Footer";

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  children: React.ReactNode; // right side content
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  left,
  children,
}) => {
  return (
    <main className="flex-1 mt-[75px] lg:mt-2">
      <div className="flex flex-col lg:flex-row gap-3 lg:h-[calc(100vh-6.2rem)] lg:overflow-hidden">
        {/* Left section */}
        <div className="w-full lg:w-1/2 h-[500px] sm:h-[710px] lg:h-full">
          <div className="h-full lg:sticky lg:top-0">{left}</div>
        </div>

        {/* Right section */}
        <div className="w-full lg:w-1/2 lg:overflow-y-auto">
          <div className="flex flex-col gap-2">
            {children} <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default TwoColumnLayout;
