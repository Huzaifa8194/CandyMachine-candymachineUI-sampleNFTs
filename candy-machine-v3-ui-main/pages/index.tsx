import React, { Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import the main component without suspense
const DynamicMain = dynamic(() => import('../src/main'), {
  ssr: false,
  loading: () => <div>Loading...</div>,  // Provide a fallback component for the loading state
});

const IndexPage = () => {
  return (
    <div>
      <DynamicMain />
    </div>
  );
};

export default IndexPage;
