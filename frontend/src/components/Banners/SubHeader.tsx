import React from "react";

export default function SubHeader() {
  return (
    <div className="bg-pink-100 py-4 overflow-x-auto whitespace-nowrap">
      <div className="flex gap-4 px-4 justify-center sm:justify-start">
        <img src="/images/credeli.jpg" alt="Credeli 1" className="h-24 w-auto rounded-md shadow" />
        <img src="/images/credeli2.jpg" alt="Credeli 2" className="h-24 w-auto rounded-md shadow" />
        <img src="/images/credeli2.jpg" alt="Credeli 3" className="h-24 w-auto rounded-md shadow" />
        <img src="/images/Credeli_4.png" alt="Credeli 4" className="h-24 w-auto rounded-md shadow" />
      </div>
    </div>
  );
}