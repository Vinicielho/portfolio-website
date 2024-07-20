"use client";
import { useState } from "react";

export default function PresentationBox({
  presentations,
}: {
  presentations: any;
}) {
  const [reading, setReading] = useState("portfolio website");

  return (
    <div className="w-full flex items center">
      <div>Sidenav</div>
      <div className="px-4 ">{presentations["portfolio website"]}sdgsgd</div>
    </div>
  );
}
