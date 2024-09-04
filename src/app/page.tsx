import React from "react";
import Swapper from "@/components/Swapper";
import Aggregator from "@/components/Aggregator";

export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-center pt-0 p-24">
      <div style={{"marginBottom":"24px"}}>
      <Swapper />
      </div>
      <div style={{"width":"100%", "marginBottom":"24px"}}>
      <Aggregator />
      </div>
    </main>
  );
}
